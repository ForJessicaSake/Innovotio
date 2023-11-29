import "@/styles/globals.css";
import React from "react"
import Navbar from "@/components/nav";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/index.";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import 'aos/dist/aos.css'; 

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const route = router.pathname;

  // React.useEffect(()=>{
  //   AOS.init(
  //     {
  //       offset: 120,
  //       delay: 0,
  //       duration: 1000, 
  //       easing: 'ease', 
  //       once: true, 
  //       mirror: false,
  //     })
  // })

  const exempted_paths =
    /^\/services\/recruit|^\/services\/event|^\/services\/talent|^\/services\/merch|^\/services\/merch|^\/404/;
  return (
    <div className="font-inter overflow-x-hidden bg-primary">
      {exempted_paths.test(route) ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>
      )}
    </div>
  );
}
