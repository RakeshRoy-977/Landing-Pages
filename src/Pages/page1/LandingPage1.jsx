import React from "react";
import "./Landingpage1.css";

const LandingPage1 = () => {
  const imgs = [
    "https://s3-alpha-sig.figma.com/img/bdf4/575f/2cb344eb4f41c47d59e22f1c06edefc5?Expires=1703462400&Signature=Wy-Zv0UrlfQ3qs204YFemW74OokCukX7S62ht8ZxYHT7n8DGXKqRIiO5MOnOf6ZipFXsy3dVx34RdvvqydYy4tSjXhcBgAPFguZslPNFcUAxs0jgfu9NC774tXnoRrqUscxSyId9ctThXdVWusB2727fRp5QxT3Q0f5u5emr4uVF8VymUbl~r2po~E8QOYNX7FGGSk2scnf0iHsIddI6qNwOZAnVFnh3pl6b8~bYABvDAjQAQtAR65fyXJACm9V0MzEaIEAktdYR0Gafsfvy0LRtV2MwiH7zhTi1dlljEY4QFdF11UoqPJyNnaQm2kMh0c0oZtkMyDvP1aSXISo1jA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/1754/a7aa/a4f669f3f83078046e71609705e57dbb?Expires=1703462400&Signature=grnyDEhv5NHq2iCsm20RGHPoQc~Mju0dkW3yG5-nwNnTLbvqah~6NdtCuWvaOq5L19CSpdlEtHM2ob1X7yxMJH6KXQ2m05gHJfzbVBUqziAdpBLUoCnFUP0sZDnC5GOj8geAKpRsCKCaZxgQhpS8VRR8QgJym7UrYSgellN1sfoTBEUp0mTCMmHUasxAm0HQSg5pNzlfClp0LXEjJV3759aCCfL828YmbQX3KofL-NpRcUeSJDvPIGaM8FUgIPgkWTZY-I3gXxjnKM2eXslL2Mk9qbqvMJJehl~fjh1GuKatAPf2YIb5t1T7Cx4gp7bvB9p4MT4UnRCMHlxqDbb8sg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/71e0/5245/f354bdeef965486a5e1ee595e5320529?Expires=1703462400&Signature=KGZ1fKL-w6~kfksi6ORV1PaHPfCtYFDP0ZJD5X4-Ehk8d3jmxA~CzkYBNJdABWLQww-6pyisHbnPlaRRsY1q~MW~mkuQW3Aat6jTwIHfnQ88v-58lY7p0ReKU8qKY9ZWnCBbnfZMK5hVyfTw-iNV30a-s-DQbXgkhQoQ6ztl8FJCrNgVC-wXzDgFpO5668b9gCXDNz5-6tg8CVm3piSAZCdZ3IYj0mpLv8llhRR9qE0r2z1S7ItLZpJMASR1p-Ugc~PnK9ngUQpQgbnJq0MR6vs0uIUFF-RSM4X5QDmLjKaC-V1gk3Y-KHFwM1leAJHm5D6BOb-N1kfmRExWzgtp~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/4f07/6c2e/c123408dc6a729608ef9c593648e51c9?Expires=1703462400&Signature=kkfUKL55h3mKsRKOffyazLarg9EfSiaX7s1FBLq7VPKSyQsEflxk~g98xSx5EqFO5cZDJL0Zj5CYMvN6rtjfPJ8x9EGhgTlwvgpedPkYJGzScGABTyJEj8RnfEWW3-xA5Ly5m55oeVGfPJrYqQRCTdOVdaf2DKq2yA1lniYAv1K3YzB2GCVVArk3l4ntDMDruIKGORYKQZULPsBYjaPEIgjXeDrEXNRRZsvvhKuwULUdBfoC8yzhVgBOT6ulRpaC5uz4YEU-II0j005JdZ0CpMMehePSHyZ0cYr1Fi8iLyhhVooiT0IKupfViAa88F7OMa9W9fvHOnMl3U2DRfiYig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/578d/cfb0/ea8b8391fcdfd9bc097adcc580dc14d9?Expires=1703462400&Signature=AaM0YL2SJ2cVIcaVYay1MkDo1hMrMsDZrwU6ZbhROvBHZT-70CWbP1AqxvhqRPONgZ4xXbSc-pf3VZFUXAmSBk0OMYI2WDI1u8M7ecIMrRXe3rjUyiFszj~CiXmDIR1o28KOhrAzNMvE1apKPrKSQ5sWPNAECQfmYZHnlq-i80~9RR2cnPS~AFffuNzRPiH97Sf3e9ro~73SrCr6835WF-YhVlMHCUwVodBk~P0Y1BBpXY72gfZNAGMUKrnGDOOF18ozMKaLmiE4OjYtR6ksPP4nLv8yzZYlM3lSytwpzEVRvvwOoYQkJKPwOeMfCwsX57zVAHQyfGi5Zqh2IKh1DA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/505b/5f3c/cb8fd17165aec11ef4f76ee4ec1b13c0?Expires=1703462400&Signature=W03AKK-vINGMEf86SKjUE9JjwkprdtPAdMq6s~wLkcgvAW7brvUn5YEV5e4cZ9sfokqHk6X~qcQ-JVlC6UktW2tcIQiacWwkhxPIAQMN9VWPVR8LfzPAADZtE85f3GgBJ1EA7cFkbIZjl2Dlx7WcxvkD1wXuhBZKPmhTH4doH~PKOrP~3KCspS6mgdBabscftFJ-SNV-aCr2KF~zERlbVTyOTez5gv6FuA1NWBQItpjcQmfHHOdihJH4hkmWgnYQxIOAKdzLXA7Mun1bhWM7yT-5oBohRTVJ7-wdP~1bGqa0R~SrymnwsEqmbz6j3WkubN05kTY9EptOwkz81xuVWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/c64e/b085/ecdb9f2607e2f92ea49ae39e6b008ad5?Expires=1703462400&Signature=fgiRV8axCDU2AYoIxXQxLyiNPJ69u069d6Ovzqg-GVGEykMdpa5RZK6BvWwo5D3eJ3TSAAwZ-y1GwNqIqX8u0NdoeN0hd1q60hsetcJ0vnrnzqAqriSNxaqHO4OCq2TpAbS1aitlOfNM9CdHJddpZWigOT~Pz-6ojJkvKs1xnz9~EnySnSZBxrxAfLlD4qjzhnAflhx9PwU-BrRO2z5Se5vmwzc1pzExrmtRSCX4B6Zv0YrzELO8QCq5YOVDkyBGHy-qTIn3cCfyYCWHvGGzt75FKIDveY-ishG1gRQyQZ~j7Dyc6orYoZG2fHiKEJxVVp2ZGo7O59ouCModa65lwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/476e/e287/a70bc18b4c5de81aedaa8dd7dde84f3a?Expires=1703462400&Signature=bm67Sv~TgPYCkuL2nlanpjajnclFl8KwzCXduz3cc3BeH18Y0S9iPSsk~Nb6Mt9GdyIBm~ZfI2dPfMVDB-sjQjJ8n2sJ0n7DZDxwnovFkSv0Zoxfv~SyhSW2k3olVnJ0s7SYNWZ66tOhs7dGnvWPolk7fk2mhkyPgyYnUKClKTNvOQBGN8-qEPRaGsncL4GfDYcxAyNPd-YoGxMVf2oo7uc2mSIEu~wAqKYSMYR8qhrU-ZLB9ckKlM~g2pXlXzzyT7pHH08spgYUIPubRzNgSg-Wi1Om2xAC~WKYy2a4jb5ly7MF-jWh5yolklZmEOAU3b4wVLpH4S-yEZf5N886fw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  ];
  return (
    <>
      <div className="LandingPage1Box">
        <div className="LandingPage1Texts">
          <h1>Discover the beauty around the world</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget
            diam.
          </p>
          <button>Explore</button>
        </div>
        <div className="LandingPage1_imgs">
          {imgs.map((x, i) => (
            <img key={i} src={x} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage1;
