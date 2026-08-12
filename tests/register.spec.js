import {test} from '@playwright/test'
import registerpage from '../Pages/registerpage'
import data from '../testdata/register.json'

test("Demo Webshop", async({page})=> {
   
  
    //! 1.Create a registration page object and access the elements 
    const registerpageobj = new registerpage(page);
    
    //! 2. Open the website 
    await registerpageobj.navigatetoDemoshop()

    //! 3. Open the register link
    await registerpageobj.registerlink.click()

    //! 4. Fill personal



})



