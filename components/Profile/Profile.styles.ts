import styled from '@emotion/styled';
import { Colors } from '../../enums/colors';

const CardStyled = styled('div')`
  background-color: ${Colors.DarkBlue};
  border-radius: 15px;
  grid-area: Profile;
  width: 100%;

  .profile {
    align-items: center;
    background-color: ${Colors.Profile};
    border-radius: 15px;
    display: flex;
    padding: 20px;

    .__image-container {
      padding-right: 10px;
    }

    .info {
      margin: 0;
      padding-left: 10px;

      .__label {
        color: ${Colors.PaleBlue};
        font: 300 1em 'Rubik';
      }

      .__value {
        color: white;
        font: 300 1.5em 'Rubik';
      }
    }
  }

  .report-types {
    padding: 25px 30px;

    .__list {
      align-items: center;
      display: flex;
      list-style: none;
      justify-content: space-between;
      margin: 0;
      padding: 0;

      .__item {
        color: ${Colors.PaleBlue};
        cursor: pointer;
        font: 400 1.125em 'Rubik';
        margin: 0;
        transition: color 0.2s ease-in;

        &.-selected {
          color: white;
          font-weight: 400;
        }

        &:first-child {
          margin-top: 0;
        }

        &:hover {
          color: white;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  @media screen and (min-width: 640px) {
    .profile {
      align-items: unset;
      display: block;
      padding: 25px;

      .__image-container {
        padding: 0;
      }

      .info {
        margin: 25px 0;
        padding: 0;

        .__value {
          font: 300 2.188em 'Rubik';
          white-space: unset;
        }
      }
    }

    .report-types {
      padding: 25px;
    }
  }

  @media screen and (min-width: 1008px) {
    .profile {
      .info {
        .__value {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;

const ImageWrap = styled.span`
  img {
    border: 3px solid white;
    border-radius: 50px;
    width: 70px;
  }
`;

export { CardStyled as default, ImageWrap };
