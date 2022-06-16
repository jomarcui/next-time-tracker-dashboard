import styled from '@emotion/styled';
import { Colors } from '../../enums/colors';

const CardStyled = styled('div')`
  background-color: ${Colors.DefaultBackground};
  border-radius: 15px;
  grid-area: Profile;

  .profile {
    background-color: ${Colors.Profile};
    border-radius: 15px;
    padding: 25px;

    .__label {
      color: white;
      font-size: 0.75em;
    }

    .__value {
      color: white;
      font-size: 2.188em;
    }
  }

  .report-types {
    padding: 25px;

    .__list {
      list-style: none;
      margin: 0;
      padding: 0;

      .__item {
        color: white;
        margin: 25px 0;

        &:first-child {
          margin-top: 0;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default CardStyled;
