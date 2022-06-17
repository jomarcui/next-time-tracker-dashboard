import styled from '@emotion/styled';
import { Colors } from '../../enums/colors';

type CardStyledProps = {
  backgroundColor: Colors;
};

const CardStyled = styled('div')<CardStyledProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  .__spacer {
    /* padding: 20px; */
  }

  .__content {
    background-color: ${Colors.DarkBlue};
    border-radius: 15px;
    margin-top: auto;
    padding: 25px;

    .__header {
      display: flex;

      .__label {
        color: white;
        font: 500 1.125em 'Rubik';
      }

      .__more {
        cursor: pointer;
        margin-left: auto;
      }
    }

    .responsive-container {
      .__body {
        color: white;
        font: 300 3.75em 'Rubik';
      }

      .footer {
        color: ${Colors.PaleBlue};
      }
    }

    @media screen and (max-width: 640px) {
      .responsive-container {
        align-items: center;
        display: flex;
        margin-top: 10px;

        .__body {
          color: white;
          font-size: 1.818em;
        }

        .footer {
          color: ${Colors.PaleBlue};
          margin-left: auto;
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    .__spacer {
      padding: 10px;
    }
  }
`;

export default CardStyled;
