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
    padding: 25px;
  }

  .__content {
    background-color: ${Colors.DefaultBackground};
    border-radius: 15px;
    color: white;
    margin-top: auto;
    padding: 25px;

    .__header {
      display: flex;

      .__more {
        margin-left: auto;
      }
    }

    .__body {
      font-size: 3.75em;
    }
  }
`;

export default CardStyled;
