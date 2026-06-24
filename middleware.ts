// Vercel Edge Middleware for Markdown for Agents
// Converts HTML responses to markdown when Accept: text/markdown header is present

interface EdgeRequest extends Request {
  context: {
    params: Record<string, string | undefined>;
  };
}

interface VercelRequest {
  request: Request;
  context: {
    params: Record<string, string | undefined>;
  };
}

// Simple HTML to Markdown converter
function htmlToMarkdown(html: string): string {
  let markdown = html;

  // Remove script and style tags
  markdown = markdown.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  markdown = markdown.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

  // Remove DOCTYPE and html, head, body tags
  markdown = markdown.replace(/<!DOCTYPE[^>]*>/gi, '');
  markdown = markdown.replace(/<\/?(html|head|body)[^>]*>/gi, '');

  // Headings
  markdown = markdown.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '# $1\n\n');
  markdown = markdown.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '## $1\n\n');
  markdown = markdown.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '### $1\n\n');
  markdown = markdown.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '#### $1\n\n');
  markdown = markdown.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '##### $1\n\n');
  markdown = markdown.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '###### $1\n\n');

  // Bold and italic
  markdown = markdown.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  markdown = markdown.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');
  markdown = markdown.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*');
  markdown = markdown.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');

  // Links
  markdown = markdown.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');

  // Images
  markdown = markdown.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi, '![$2]($1)');
  markdown = markdown.replace(/<img[^>]*src="([^"]*)"[^>]*>/gi, '![]($1)');

  // Lists
  markdown = markdown.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (match, content) => {
    return content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');
  });
  markdown = markdown.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (match: string, content: string) => {
    let num = 1;
    return content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, () => `${num++}. $1\n`);
  });
  markdown = markdown.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');

  // Code blocks
  markdown = markdown.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, '```\n$1\n```\n');
  markdown = markdown.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`');

  // Blockquotes
  markdown = markdown.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, '> $1');

  // Paragraphs and line breaks
  markdown = markdown.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n');
  markdown = markdown.replace(/<br[^>]*>/gi, '\n');
  markdown = markdown.replace(/<hr[^>]*>/gi, '\n---\n');

  // Tables
  markdown = markdown.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (match: string, content: string) => {
    const rows = content.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi) || [];
    return rows.map((row: string, i: number) => {
      const cells = row.match(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi) || [];
      const cellText = cells.map((cell: string) => cell.replace(/<[^>]*>/g, '').trim()).join(' | ');
      let result = '| ' + cellText + ' |\n';
      if (i === 0) {
        result += '|' + cells.map(() => ' --- ').join('|') + '|\n';
      }
      return result;
    }).join('');
  });

  // Remove all remaining HTML tags
  markdown = markdown.replace(/<[^>]*>/g, '');

  // Clean up extra whitespace
  markdown = markdown.replace(/\n{3,}/g, '\n\n');
  markdown = markdown.trim();

  return markdown;
}

// Vercel Edge Middleware entry point
export default async function middleware(request: Request): Promise<Response> {
  const acceptHeader = request.headers.get('accept') || '';

  // Check if the request accepts markdown
  if (acceptHeader.includes('text/markdown')) {
    const url = new URL(request.url);

    // Only process HTML requests (not static files)
    if (!url.pathname.includes('.')) {
      // Fetch the original HTML response
      const response = await fetch(url.toString(), {
        headers: {
          accept: 'text/html',
        },
      });

      if (!response.ok) {
        return response;
      }

      // Get the HTML content
      const html = await response.text();

      // Convert to markdown
      const markdown = htmlToMarkdown(html);

      // Return markdown response
      return new Response(markdown, {
        status: response.status,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'x-markdown-tokens': 'true',
          'Cache-Control': 'public, max-age=300',
        },
      });
    }
  }

  // Return undefined to let Vercel continue with normal processing
  return fetch(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap.xml
     * - robots.txt
     * - .well-known (discovery files)
     * - static assets
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known|.*\\.[a-zA-Z0-9]+$).*)',
  ],
};
