import React from "react";
import "./LandingPage3.css";
const LandingPage3 = () => {
  const LP3pics = [
    "https://s3-alpha-sig.figma.com/img/ccc8/1765/6ba36bf7ca6760ae194e03c3f94b487a?Expires=1703462400&Signature=P7OXrcSSPdU4720L-2VmA7VVTgc-KgRo0YiTS48rlRBgsyJVUHVzGn0Kx-IpxOFVYf~~SRBm~66My092O63ttXwO8chI0ohAbKz-GF179EbM0N6mwLtjo1qox7Bx8Yzwx9NhqkQprqLn6tjmdfgh6uC6VGLMVTUUBAgrDjxGJcR860xfCjuXCTAdaK7bMC2Qn~Mb0DiRu7QF-89m3qxuOHkOuHBRvwKSA9APJiWtl2RBOTMCBsp59Y9mAGj4SeZCF6MaiDtMYsfAuBZ9uOW6w2ZhUsHK8rRIPzDHwOJegtzsOSu8RLxGIRBsrxykRaSnP2WvcgZ8a9-I~40ovSj0yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/e585/4df9/3897bbf4349aec89d4a65d365bee9ff5?Expires=1703462400&Signature=XB0tG0dL5wSPETVIZ-RemL7p28dvLvVeoSf6BU95pJbESE8XPpeT8UNLydXmbWMH3PC1Xc6ds78MS3QtjpI6CWSlKkvVayy0HIX9ILiA-H0R3czxHAm~nI0cmo-L8tEU9fvEWzBeVh4H5T65tSWFLhMpeMWImDhmJJs-2Xmb6JcvtQU898ZwpPDK3Xhm3kEHZ0X~pIUl4DMXQseQC-J~RmQ0N9Ph6p3hot-8Kco-GTOkIxM5BqYTkycgXZJVjJTEnwHdLKjSuJU1gWf3jqO2KZW8W3Z62X1ChlODEQzuKUT~WyggO6qV4GUeShCCoWhH8UBvXBHIDY~DPFXc8943vA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/3c74/f0eb/6e3f8203dcbe0df9d75d8ed2fd8d7240?Expires=1703462400&Signature=lXbw-Ww~k2MJ6lXtGjxv~I2W7RiI5vTz-vpPGrKXJl7sPrsMy7umZfxSW5vfSnF-HphJTtX6hkJ06D9zgDq39TWI0uoLX5Rpj-org16vfRh-LfeyV0XtReyms~yBCN03zus-w62Xbl7rNY-NRNEgBWLA8VPJ7KbF5aY-XUC2dWnIsZmq0HguwuNp-C89u52tlnVQc4FL3LKWbReVGDT9KfEGPpOjLxnYkpci3rC1gOv9ZAnkjIrSwQJmb6qON5jATyI-8gFBGJB8iLd~tjUNu5msN3OhotjujwYxoa3V1OoYLIg5D7e6l29~Tkp5HIHWaAFtZdWOyMHI0b6KTXLp2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/958c/1bce/eda103fc359ecca700ef841d06c615d0?Expires=1703462400&Signature=pBk-~t9ROnHZHYLB~MGJzeCvwtSmOKvuT5mZsYcMH1i26cnjK3teaf2BEY2PUMcvnOZQTdmYiJGZxbkdUx4aF0AeKkRu9KtKDX6GhZChD-810Vg05wndjDAmYkYgzXEuwE5yN4WefAIITfnSXxTquXXz0-IxIlu0gnG2XFdfJ~0ZuvvTTChA55ppl~yxOqD29YneUwTWWz36Rdxzt8s3zVQLZvMDqHY9CBbTeAEAot9c-KMZY5aNSXazCM0pb27bK8Mz6Vk1w0PoGDvPoA2B97V7TDYHNCEfT53~2eEypKYyF9igA7AMlASIKwILS8yFc3Ejxzx2pSxuBjGMl6TB2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/bbf9/fdcb/0a460a0ab6ca388512c430cc67fcd382?Expires=1703462400&Signature=luJrPeT~b-XA1KKnuZLIWmxwl6YPVr9xxcOLDy~1Kpx8EMxQg-U1VUtL-hMdOtaltEV0yLC7MvP-7odKcy8Df7nWs2f3qRb51GwcicoTEECgl6CLyu-NHUZSZZ7-0ZVNEHZ6qZhvribh2JHG9sG4OmGkyCVlX6Sul4JoxEUMkwP0Cn3WaEYMMN6E3JQdM2iC8YZRVGf9aN8viVUqemwNRGGySXsfY2oHg~B6CiZmyl3KpNawsP2NG6I6cUwdFkmXQGQA8Tll8J8WFzRFF69Uk1TGSFSDKZr-5KYl8qzoRAGth1tzKTEiFH7pqwjUO9xEpf9PV7Gkj6wLhTHJTVD1WQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/2d7b/28fa/cdd6d2e0b4a130b5bd531241fc5e87c6?Expires=1703462400&Signature=I2HXmuMfJL2m8odEomlAIuq~RbJuO8f3GHajwLVucWi-D4ahatl~UcNmJjjzc7VTU6ZOs8gaN0bAeQWE2Enl1qEHlT-IHspMzs44JRzEQJIngfmTh-RhIMpbBzklorcacoJgpnrtfP59ESsNjK437X7evkjdKH0gOQXqbEnEcGzFCUYwmjHJRRFg3cVPBRLw8bv2nlPC0u-PI~cklssPd1l6XPTtMK~8xMHkvGzPaw1UZIuY7f-Ffe0wnYtF6gQEk8IaZUpx4gcraCCOHnIE9PBSnlz34A36Mz234s9PhKLpnmKHUaXZ9OX3mNyw8c8g5GT3PHzUPN19uqg4v8lvZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/f4bb/cfb8/c9812abb002684c8caa51f11b4210ea2?Expires=1703462400&Signature=golSzYrmU5nNEw3mS~z4ZmFDeVluSyCwNiadO7jy~7sgbDpu~VFbwxI8C8ucRflctcQxysGh2CxZkzbL7-~Kcoeh-R5wVTNIWIlYu8e93YnBdxAZAFs6OffW-~YS29jeV8E36ec4fl0bVGKFODkDIx~fKNvKHXK8wEGBvJOqY1K-TCVmLPzHC1l2HGnKxxfAjc9eg~GWaT88YPIh8T8ATVQjonC1lnEXSibRVhqgucVTh6ziSt9dGl49Sy3QiQ9d~dCKUeq1hg9QffOrI3Mafq03yh26~La2RvxFfZJn~tA2WnbdvAbL1lZ89nTOgreHUVZ86Bg2KmUb-y-jBNmlWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  ];
  return (
    <>
      <div className="LandingPage3Box">
        <div className="LandingPage3Left">
          <h2>
            Wake up your taste buds with this <span>juicy bite</span>
          </h2>
          <div className="LP3pics">
            {LP3pics.map((x, i) => (
              <img key={i} src={x} />
            ))}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus.
          </p>
          <button>Explore the menu</button>
          {/* <div>sds</div> */}
        </div>
        <div className="LandingPage3Right">
          {/* <img
            src=
            alt="burgur"
          /> */}
        </div>
      </div>
    </>
  );
};

export default LandingPage3;
