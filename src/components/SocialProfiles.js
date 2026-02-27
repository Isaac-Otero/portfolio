import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

const SocialProfile = props => {
  const { link, image } = props.socialProfile;
  return (
    <a className="w-9 h-9" href={link}>
      <img className="bg-white" src={image} alt='social-profile' />
    </a>
  )
}

const SocialProfiles = () => (
  <div className="flex flex-col items-center gap-y-7 pb-7">
    <h2>Let's stay connected!</h2>
    <div className="flex gap-x-6">
      {
        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
          return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
        })
      }
    </div>
  </div>
)
export default SocialProfiles;
