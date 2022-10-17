import React from "react"

interface BadgeProps {
    badgeContent: any
    badgeBgColor: string
    badgeTextColor: string
    textSize: string
    textWeight: string
    badgeWidth: string
  }
  
  export const Badges:React.FC<BadgeProps> = ({badgeContent, badgeBgColor, badgeTextColor, textSize, textWeight, badgeWidth}) => {
    return (
      <div className={`inline-flex items-center justify-center rounded-full h-[26px]`} style={{ width: badgeWidth, padding: '10px 0px', backgroundColor: badgeBgColor, color: badgeTextColor}}>
          <span className={`${textSize} ${textWeight}`}>{badgeContent}</span>
      </div>
    )
  }