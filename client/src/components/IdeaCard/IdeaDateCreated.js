import React from "react";
import styled from "styled-components";

const IdeaDateCreated = ({ date }) => {
    const getDisplayDateTime = timestamp => {
        let locale = 'en';
        let today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0, 0);

        let date = new Date(timestamp);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0, 0);

        let differenceDays = (today - date)/86400000; /// 1000 * 3600 * 24

        let weeksFormat = { weekday: 'long'};
        let olderThanWeekFormat = { year: 'numeric', month: 'short', day: '2-digit' };
        let timeFormat = { hour:'2-digit', minute: '2-digit'};
        let displayDate = "";
        if (differenceDays === 0)
            displayDate = "Today";
        else if (differenceDays === 1)
            displayDate =  "Yesterday";
        else if(differenceDays > 1 && differenceDays < 7){
            displayDate =  date.toLocaleDateString(locale, weeksFormat);
        }else {
            displayDate =  date.toLocaleDateString(locale, olderThanWeekFormat);
        }
        return `${displayDate}, ${new Date(timestamp).toLocaleTimeString(locale, timeFormat)}`
    }
  return(
    <Wrapper>
      { getDisplayDateTime(date) }
    </Wrapper>
  )
}


/**
 *  STYLES
 */
const Wrapper = styled.div`
    font-size: 12px;
    margin-bottom: 12px;
`

export default IdeaDateCreated;