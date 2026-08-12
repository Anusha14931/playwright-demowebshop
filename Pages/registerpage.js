class registerpage{
    constructor(page){
        this.page = page
        this.registerlink = page.getByRole('link', { name: 'Register' })
        this.maleradio = page.getByRole('radio',{name : 'Male'})
        this.femaleradio = page.getByRole('radio',{name : 'Female'})
        this.Firstname = page.getByRole('textbox',{name : 'First name:'})
        this.Lastname = page.getByRole('textbox',{name : 'Last name:'})
        this.Email = page.getByRole('textbox',{name : 'Email:'})
        this.Password = page.locator('#Password')

        this.Confirmpassword = page.locator('#ConfirmPassword')

        this.registerbutton = page.getByRole('button',{name : 'Register'})
        this.continuebutton = this.page.getByRole('button',{name : 'Continue'})
       

    }
    async navigatetoDemoshop(){
        await this.page.goto("https://demowebshop.tricentis.com/")
    }
    async navigatetoRegisterPage(){
        await this.registerlink.click()
    }
    async fillRegitrationForm(fn,ln,eMail,pwd){
        // if(data.gender == 'Male')
        // {
        //     await this.maleradio.click()
        // }
        // else
            await this.femaleradio.click()
        await this.Firstname.fill(fn)
        await this.Lastname.fill(ln)
        await this.Email.fill(eMail)
        await this.Password.fill(pwd)
        await this.Confirmpassword.fill(pwd)
        await this.registerbutton.click()
    }

    async validateregistrationandConfirm(){

         let confirmregister = this.page.getByRole('heading',{name : 'Register', level : '1'})
         
         let registrationconfirmationtext = this.page.getByText('Your registration completed')
         await confirmregister.isVisible()
         await registrationconfirmationtext.isVisible()
         await this.continuebutton.click()
    }


}
export default registerpage