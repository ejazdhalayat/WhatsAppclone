import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import ReplayIcon from '@mui/icons-material/Replay';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import ContactCard from './ContactCard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


function ContactList({user,logout, ...props}) {

  const ContactArray = [ { name : "Arfat", img : 'https://pps.whatsapp.net/v/t61.24694-24/312280018_169906322326594_541453286877171405_n.jpg?ccb=11-4&oh=01_AdQSLKhssREK0pWVtJdyzrKvm6_dwO62VpAIrvwH2563Fw&oe=63A981F0', time : '9:00 pm', msg : 'Join now' } , 
  {name : "Farha", img : "https://pps.whatsapp.net/v/t61.24694-24/307103608_5188485381263683_671062888608676686_n.jpg?ccb=11-4&oh=01_AdSCnYpPLML_34ngsDh6NYvbYm4ldiRpGuL5UlaKIYAPKg&oe=6399DBAE" , time : '10:00 am', msg : 'Which link?'},
  {name : "Sadia", img : "https://pps.whatsapp.net/v/t61.24694-24/310110404_955288089195524_7301502132524348877_n.jpg?ccb=11-4&oh=01_AdTwR6weTkKqkK6JRVuVi48vSLYfZ0WWNh6uSlW4dvawhw&oe=63A9AEF4" , time : '10:00 am', msg : 'Let me check'},
  {name : "Anmol", img : "https://pps.whatsapp.net/v/t61.24694-24/158723607_419193396439292_5955373819812020282_n.jpg?ccb=11-4&oh=01_AdRnapx84SjUYutq9XlBng7LBcSVHGHMux9ed8w_6-NR5Q&oe=6399C042" ,time : '10:00 am', msg : 'Hi Anmol, Ejaz here.'}, 
  {name : "Nikhat", img : "https://pps.whatsapp.net/v/t61.24694-24/180331887_856279525298753_2313013107755184080_n.jpg?ccb=11-4&oh=01_AdTkURxNGD_9H9AtsUFZyoLDbVgHUlq22r3FPYMShM9woQ&oe=6399F4B6" ,time : '10:00 am', msg : 'Okay'},
  { name : "Preeti", img : "", time : '9:00 pm', msg : 'Done.' } , 
  {name : "Farha", img : "https://pps.whatsapp.net/v/t61.24694-24/307103608_5188485381263683_671062888608676686_n.jpg?ccb=11-4&oh=01_AdSCnYpPLML_34ngsDh6NYvbYm4ldiRpGuL5UlaKIYAPKg&oe=6399DBAE" , time : '10:00 am', msg : 'Which link?'},
  {name : "Sadia", img : "https://pps.whatsapp.net/v/t61.24694-24/310110404_955288089195524_7301502132524348877_n.jpg?ccb=11-4&oh=01_AdTyxIvaH97NjnAGsLdVc2fTxk0JlvFGoXXvBkDoe1QFyg&oe=6399DCF4" , time : '10:00 am', msg : 'Let me check'},
  {name : "Anmol", img : "https://pps.whatsapp.net/v/t61.24694-24/158723607_419193396439292_5955373819812020282_n.jpg?ccb=11-4&oh=01_AdRnapx84SjUYutq9XlBng7LBcSVHGHMux9ed8w_6-NR5Q&oe=6399C042" ,time : '10:00 am', msg : 'Hi Anmol, Ejaz here.'}, 
  {name : "Nikhat", img : "https://pps.whatsapp.net/v/t61.24694-24/180331887_856279525298753_2313013107755184080_n.jpg?ccb=11-4&oh=01_AdTkURxNGD_9H9AtsUFZyoLDbVgHUlq22r3FPYMShM9woQ&oe=6399F4B6" ,time : '10:00 am', msg : 'Okay'}]

  console.log(logout)
function XYZ(x){

  props.setContact(x)

}




  return (
    <div className='bg-slate-800 col-span-2 '>

      {/* Top Nav */}
      <div className='flex justify-between p-2 items-center
       bg-slate-700 '>
        <img className='rounded-full h-9 w-9' alt='' src="https://pps.whatsapp.net/v/t61.24694-24/298328542_766611371246745_4042993338047187675_n.jpg?ccb=11-4&oh=01_AdRBA9rWF0EG-77UAFkHHh2zbtTd_PH39XVfFsiR8V0A9Q&oe=63A99A3D" />

        <div className='flex text-gray-300 justify-center items-center text-lg space-x-3'>
        <GroupsIcon fontSize='inherit' />
        <ReplayIcon fontSize='inherit' />
        <MessageIcon fontSize='inherit' />
        <button onClick={()=> logout()}><ExitToAppIcon fontSize='inherit'/></button> 
       <MoreVertIcon fontSize='inherit' />
        </div>

      </div>


      <div className='flex items-center justify-between text-gray-300 text-lg 
      px-3 py-2'>
        <div className='flex items-center w-full bg-slate-700 px-2 py-1 rounded-md'>

          <SearchIcon fontSize='inherit' />
          <input placeholder='Search or Start new chat' className='bg-transparent text-sm ' />

        </div>
          <KeyboardDoubleArrowDownIcon className='ml-3' fontSize='inherit' />
      </div>

      <div className='mt-4 overflow-y-scroll max-h-[32rem] pb-6'>

        {
          ContactArray.map((item,index) => <button onClick={() => XYZ(item)} key={index} className='w-full'> <ContactCard  showName={item.name} showImg={item.img} setTime={item.time} showMsg={item.msg}  /></button>)
        }

{/* {
          ContactArray.map((item,index) => <ContactCard key={index} showName={item.name} showImg={item.img} setTime={item.time} showMsg={item.msg} />)
        } */}

        


        {/* <ContactCard showName="Arbaz" setTime='3:00 pm' showMsg='Done' /> */}

        {/* <ContactCard showName={ContactArray[0].name} setTime="10:00 am" showImg={ContactArray[0].img} showMsg='Join now'/> */}

        {/* <ContactCard showName="Anmol" setTime='9:30 pm' showImg='https://pps.whatsapp.net/v/t61.24694-24/158723607_419193396439292_5955373819812020282_n.jpg?ccb=11-4&oh=01_AdRnapx84SjUYutq9XlBng7LBcSVHGHMux9ed8w_6-NR5Q&oe=6399C042' showMsg='Ejaz here'/>

        <ContactCard showName="Lubna" showMsg='Class kb hai?'/>

        <ContactCard showName="Sadia" showImg="https://pps.whatsapp.net/v/t61.24694-24/310110404_955288089195524_7301502132524348877_n.jpg?ccb=11-4&oh=01_AdTyxIvaH97NjnAGsLdVc2fTxk0JlvFGoXXvBkDoe1QFyg&oe=6399DCF4" showMsg='Kal connect karenge?'/>

        <ContactCard showName="Misba" setTime='6:00 pm' showImg='https://pps.whatsapp.net/v/t61.24694-24/311558500_110009375161931_1795086125665368810_n.jpg?ccb=11-4&oh=01_AdQbnNMpUb2cwIyXUrlAVz9cm908JefJl35zjWfoNQCOZg&oe=6399F0E3' showMsg='This message was deleted.'/>

        <ContactCard showName="Shaukat Sir" setTime='6:00 am' showImg='https://pps.whatsapp.net/v/t61.24694-24/267663942_867206337788551_2000697237867880520_n.jpg?ccb=11-4&oh=01_AdRo0O381anbd26jF3BqVZZ4Ky8A9bQMcItBFAdd6fcxWw&oe=6399FE06' showMsg='Great.'/>

        <ContactCard showName="Farha" showImg='https://pps.whatsapp.net/v/t61.24694-24/307103608_5188485381263683_671062888608676686_n.jpg?ccb=11-4&oh=01_AdSCnYpPLML_34ngsDh6NYvbYm4ldiRpGuL5UlaKIYAPKg&oe=6399DBAE' showMsg='Open huwa ejaz'/>

        <ContactCard showName="Nikhat" setTime="11:00 am" showImg='https://pps.whatsapp.net/v/t61.24694-24/180331887_856279525298753_2313013107755184080_n.jpg?ccb=11-4&oh=01_AdTkURxNGD_9H9AtsUFZyoLDbVgHUlq22r3FPYMShM9woQ&oe=6399F4B6' showMsg='Okay'/>

        <ContactCard showName="Shaukat Sir" setTime='6:00 am' showImg='https://pps.whatsapp.net/v/t61.24694-24/267663942_867206337788551_2000697237867880520_n.jpg?ccb=11-4&oh=01_AdRo0O381anbd26jF3BqVZZ4Ky8A9bQMcItBFAdd6fcxWw&oe=6399FE06'/>

        <ContactCard showName="Nikhat"/> */}

      </div>
    </div>
  )
}

export default ContactList