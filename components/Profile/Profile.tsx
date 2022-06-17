import { FC } from 'react';
import CardStyled, { ImageWrap } from './Profile.styles';

export interface IProfile {
  firstName: string;
  lastName: string;
}

const reportTypes = ['Daily', 'Weekly', 'Monthly'];

const Profile: FC<IProfile> = ({ firstName, lastName }) => (
  <CardStyled>
    <div className="profile">
      <ImageWrap className="__image-container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={`${firstName} ${lastName}`}
          src="/images/image-jeremy.png"
        ></img>
      </ImageWrap>
      <div className="info">
        <div className="__label">Report for</div>
        <div className="__value">{`${firstName} ${lastName}`}</div>
      </div>
    </div>
    <div className="report-types">
      <ul className="__list">
        {reportTypes?.map((reportType, index) => (
          <li
            className={`__item ${index === 1 ? '-selected' : ''}`}
            key={index}
          >
            {reportType}
          </li>
        ))}
      </ul>
    </div>
  </CardStyled>
);

export default Profile;
