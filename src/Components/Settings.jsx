import React from 'react'
import '../Css/Settings.css'

import DisplayImage from '../Assets/SettingsIcon/Display.png'
import ThemeImage from '../Assets/SettingsIcon/Theme.png'
import FutureImage from '../Assets/SettingsIcon/Future.png'
import Week1 from '../Assets/SettingsIcon/Week.png'
import Notification1 from '../Assets/SettingsIcon/Notification.png'
import NotificationTone from '../Assets/SettingsIcon/Notification tone.png'
import Reminder1 from '../Assets/SettingsIcon/Reminder.png'
import System from '../Assets/SettingsIcon/System.png'
import ShowPass from '../Assets/SettingsIcon/Show Pass.png'
import EnablePass from '../Assets/SettingsIcon/Enable Pass.png'
import Location from '../Assets/SettingsIcon/Location.png'
import Language from '../Assets/SettingsIcon/Language.png'
import ChangeLanguage from '../Assets/SettingsIcon/ChangeLanguage.png'
import Currency from '../Assets/SettingsIcon/Currency.png'
import ChangeCurrency from '../Assets/SettingsIcon/Change Currency.png'

const Settings = () => {
  const handleSettingClick = (setting) => {
    console.log(`Clicked on ${setting}`);
  };

  return (
    <div>
      <div className="settings-container">

        <div className="settings-box">
          <div className='box-top'>
          <h2>
            <img src={DisplayImage} alt="" className="feature-icon" />
            Display
          </h2>
          </div>
          <div className="sub-features">
            <div className="sub-feature" onClick={() => handleSettingClick('Theme')}>
              <img  src={ThemeImage} alt="" className="sub-feature-icon" />
             <p> Theme</p>
            </div>
            <div className="sub-feature" onClick={() => handleSettingClick('Set Future Period')}>
              <img src={FutureImage} alt="" className="sub-feature-icon" />
              <p>Set Future Period</p>
            </div>
            <div className="sub-feature" onClick={() => handleSettingClick('Select First Day Of Week')}>
              <img src={Week1} alt="" className="sub-feature-icon" />
             <p> Select First Day Of Week</p>
            </div>
          </div>
        </div>




        <div className="settings-box" onClick={() => handleSettingClick('Notification')}>
          <h2>   <img src={Notification1} alt="" className="feature-icon" />
            <p>Notification</p></h2>
          <div className="sub-features">
            <div className="sub-feature" onClick={() => handleSettingClick('Notification Tone')}>
              <img src={NotificationTone} alt="" className="sub-feature-icon" />
             <p> Notification Tone</p>
            </div>
            <div className="sub-feature" onClick={() => handleSettingClick('Daily Reminder')}>
              <img src={Reminder1} alt="" className="sub-feature-icon" />
             <p> Daily Reminder</p>
            </div>
          </div>
        </div>

        <div className="settings-box" onClick={() => handleSettingClick('System')}>
          <h2>  <img src={System} alt="" className="feature-icon" />
           <p> System</p></h2>
          <div className="sub-features">
            <div className="sub-feature" onClick={() => handleSettingClick('Change Password')}>
              <img src={ShowPass} alt="" className="sub-feature-icon" />
              <p>Change Password</p>
            </div>
            <div className="sub-feature" onClick={() => handleSettingClick('Enable Password')}>
              <img src={EnablePass} alt="" className="sub-feature-icon" />
              <p>Enable Password</p>
            </div>
            <div className="sub-feature" onClick={() => handleSettingClick('Using Location')}>
              <img src={Location} alt="" className="sub-feature-icon" />
             <p> Using Location</p>
            </div>
          </div>
        </div>
        <div className="settings-box" onClick={() => handleSettingClick('Language')}>
          <h2><img src={Language} alt="" className="feature-icon" />
           <p> Language</p></h2>
          <div className="sub-features">
            <div className="sub-feature" onClick={() => handleSettingClick('Change Language')}>
              <img src={ChangeLanguage} alt="" className="sub-feature-icon" />
             <p> Change Language</p>
            </div>
          </div>
        </div>
        <div className="settings-box lastS" onClick={() => handleSettingClick('Currency')}>
          <h2> <img src={Currency} alt="" className="feature-icon" />
           <p> Currency</p></h2>
          <div className="sub-features">
            <div className="sub-feature" onClick={() => handleSettingClick('Change Currency')}>
              <img src={ChangeCurrency} alt="" className="sub-feature-icon" />
             <p> Change Currency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
