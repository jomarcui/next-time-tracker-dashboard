import { FC } from 'react';
import CardStyled from './Profile.styles';

export interface IProfile {
  firstName: string;
  lastName: string;
}

const reportTypes = ['Daily', 'Weekly', 'Monthly'];

const Profile: FC<IProfile> = ({ firstName, lastName }) => (
  <CardStyled>
    <div className="profile">
      <div className="__label">Report for</div>
      <div className="__value">{`${firstName} ${lastName}`}</div>
    </div>
    <div className="report-types">
      <ul className="__list">
        {reportTypes?.map((reportType, index) => (
          <li className="__item" key={index}>
            {reportType}
          </li>
        ))}
      </ul>
    </div>
  </CardStyled>
);

export default Profile;
