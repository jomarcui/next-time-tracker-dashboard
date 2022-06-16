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
    color: white;
    margin-top: auto;
    padding: 25px;

    .__header {
      display: flex;

      .__label {
        font: 500 1.125em 'Rubik';
      }

      .__more {
        cursor: pointer;
        margin-left: auto;
      }
    }

    .__body {
      font-size: 3.75em;
    }
  }
`;

export default CardStyled;
