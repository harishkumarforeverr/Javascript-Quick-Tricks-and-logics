// Antd element load outside of  root Div
//         getPopupContainer={trigger => trigger.parentNode}
        
        
//  and parent should have poistion realtive then only these above property will work
//  and  example 
//                <div  
//                   style={{
//                     position: "relative",
//                   }}
//                 >
//                   <Select
//                     placeholder="any text"
//                     onChange={(e) =>  {}}
//                     // value={mode}
//                     onBlur={(event) => {
//                       //setBlurCheck({ ...BlurCheck, mode: true }); 
//                     }}
//                     getPopupContainer={(trigger) => trigger.parentNode}
//                   >
//                     <Option value="Tele Health">{t("Tele Health")}</Option>
//                     <Option value="Home Visit">{t("Home Visit")}</Option>
//                     <Option value="Clinical Visit">
//                       {t("Clinical Visit")}
//                     </Option>
//                   </Select>
//                   <p className="Error">{BlurCheck["mode"] && errors.mode}</p>
//                 </div>


// // for DateRangePicker 
//  getCalendarContainer={(triggerNode) => triggerNode.parentNode}
