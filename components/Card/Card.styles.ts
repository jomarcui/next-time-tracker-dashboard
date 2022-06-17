import styled from '@emotion/styled';
import { Colors, Icons } from '../../enums/colors';

type CardStyledProps = {
  backgroundColor: Colors;
  icon: Icons;
  backgroundSize: string;
};

const CardStyled = styled('div')<CardStyledProps>`
  background-image: url(${({ icon }) => icon});
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-position: top -10px right 15px;
  background-repeat: no-repeat;
  background-size: ${({ backgroundSize }) => backgroundSize};
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  .__spacer {
    padding: 10px;
  }

  .__content {
    background-color: ${Colors.DarkBlue};
    border-radius: 15px;
    cursor: pointer;
    margin-top: auto;
    padding: 25px;
    transition: background-color 0.1s ease-in;

    &:hover {
      background-color: #34397b;
    }

    .__header {
      display: flex;

      .__label {
        color: white;
        font: 500 1.125em 'Rubik';
      }

      .__more {
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
        font: 300 1em 'Rubik';
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
`;

export default CardStyled;
