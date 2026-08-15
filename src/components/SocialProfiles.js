import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

const SocialProfile = props => {
  const { link, image, name } = props.socialProfile;
  return (
    <a className="social-link" href={link} aria-label={name}>
      <img src={image} alt="" />
    </a>
  )
}

const SocialProfiles = () => (
  <div className="social-section">
    <h2>Let's stay connected!</h2>
    <div className="social-links">
      {
        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
          return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
        })
      }
    </div>
  </div>
)
export default SocialProfiles;
