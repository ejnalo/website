export function goTo(url: string, smooth: boolean = false) {
	if (url[0] == '#') {
		document.querySelector(url)?.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant' });
	} else {
		window.location.href = url;
	}
}