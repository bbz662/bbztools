export default {
    async fetch(request, env) {
      const url = new URL(request.url);
      if (url.hostname.endsWith('bbztools.pages.dev') {        const newUrl = new URL(url);
        newUrl.hostname = 'tools.bbz662.com';
        return Response.redirect(newUrl.toString(), 301); 
      }
    //   if (url.hostname.endsWith('.pages.dev')) {
    //     const newUrl = new URL(url);
    //     newUrl.hostname = 'bbz662.com';
    //     return Response.redirect(newUrl.toString(), 301);
    //   }
      
      return env.ASSETS.fetch(request);
    }
  };