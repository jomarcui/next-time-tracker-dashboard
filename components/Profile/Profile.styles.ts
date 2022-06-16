import styled from '@emotion/styled';
import { Colors } from '../../enums/colors';

const CardStyled = styled('div')`
  background-color: ${Colors.DefaultBackground};
  border-radius: 15px;
  grid-area: Profile;
  width: 255px;

  .profile {
    background-color: ${Colors.Profile};
    border-radius: 15px;
    padding: 25px;

    .info {
      margin: 25px 0;

      .__label {
        color: ${Colors.PaleBlue};
        font: 300 1em 'Rubik';
      }

      .__value {
        color: white;
        font: 300 2.188em 'Rubik';
      }
    }
  }

  .report-types {
    padding: 25px;

    .__list {
      list-style: none;
      margin: 0;
      padding: 0;

      .__item {
        color: ${Colors.PaleBlue};
        cursor: pointer;
        font: 300 1.125em 'Rubik';
        margin: 25px 0;

        &.-selected {
          color: white;
          font-weight: 400;
        }

        &:first-child {
          margin-top: 0;
        }

        &:hover {
          color: white;
          font-weight: 400;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

const ImageWrap = styled.span`
  & > span {
    border: 2px solid white !important;
    border-radius: 50px;
  }
`;

export { CardStyled as default, ImageWrap };
