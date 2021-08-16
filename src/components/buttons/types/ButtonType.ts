export type ButtonFunctionType = {
    onClick: () => void;
};

 export type StyledButtonType = {
  active?: string; 
  textColor?: string;
  padding?: string;
  paddingL?: string;
  paddingR?: string;
  border?: string;
}

export type ButtonType = ButtonFunctionType & StyledButtonType;