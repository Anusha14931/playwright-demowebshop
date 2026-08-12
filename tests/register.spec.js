import {test} from '@playwright/test'
import registerpage from '../Pages/registerpage'
import data from '../testdata/register.json'

test("Demo Webshop", async({page})=> {
   
  
    //! 1.Create a registration page object and access the elements 
    const registerpageobj = new registerpage(page);
    let fn = data.firstname
    let ln = data.lastname
    let eMail = data.email
    let pwd = data.password
    
    //! 2. Open the website 
    await registerpageobj.navigatetoDemoshop()

    //! 3. Open the register link
    await registerpageobj.navigatetoRegisterPage()

    //! 4. Fill personal and password details
    await registerpageobj.fillRegitrationForm(fn,ln,eMail,pwd)
    //! 5. Validate the registration
    await registerpageobj.validateregistrationandConfirm()




})



