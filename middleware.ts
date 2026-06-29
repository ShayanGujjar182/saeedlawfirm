import { NextResponse } from 'next/server'

// Return HTTP 410 Gone for legacy WordPress / suspected-hack URLs still in
// Google's index (GSC: /prize/*, /shop/*, WP demo + taxonomy debris). A 410 is
// a stronger deindex signal than a soft 404, so Google drops these faster. The
// GSC Removals tool is UI-only and only hides URLs temporarily, so 410 is the
// real permanent fix. Keep these crawlable (no robots block) so the 410 is seen.
export function middleware() {
	return new NextResponse('410 Gone', { status: 410 })
}

export const config = {
	matcher: [
		'/prize/:path*',
		'/shop/:path*',
		'/category/:path*',
		'/tag/:path*',
		'/author/:path*',
		'/gallery_category/:path*',
		'/demo-home',
		'/hello-world',
		'/home-version-:variant*',
		'/attorney-v1',
		'/testimonials/slide',
		'/nothing-can-be-gain-:rest*'
	]
}
