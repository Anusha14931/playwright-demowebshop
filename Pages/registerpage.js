class registerpage{
    constructor(page){
        this.page = page
        this.registerlink = page.getByText('Register')
        this.maleradio = page.getByRole('radio',{name : 'Male'})
        this.femaleradio = page.getByRole('radio',{name : 'Female'})
        this.Firstname = page.getByRole('textbox',{name : 'First name:'})
        this.Lastname = page.getByRole('textbox',{name : 'Last name:'})
        this.email = page.getByRole('textbox',{name : 'Email:'})
        this.password = page.getByRole('textbox',{name : 'Password:'})
        this.confirmpassword = page.getByRole('textbox',{name : 'Confirm password:'})
        this.registerbuttom = page.getByTestID('register-button')
        this.confirmregister = page.getByRole('heading',{name : 'Register', level : '1'})
        this.continuebutton = page.getByRole('button',{name : 'Continue'})
        this.registrationconfirmationtext = page.getByText('Your registration completed')

    }
    async navigatetoDemoshop(){
        await this.page.goto("https://demowebshop.tricentis.com/")
    }
    async navigatetoRegisterPage(){
        await this.registerlink.click()
    }
    async fillRegitrationForm(){
        if(data.gender == 'Male')
        {
            await page.this.maleradio.click()
        }
        else
        {
            await page.this.femaleradio.click()
        }
        await this.Firstname.fill(data.Firstname)
        await this.Lastname.fill(data.Lastname)
        await this.email.fill(data.email)
        await this.password.fill(data.password)
        await this.confirmpassword.fill(data.password)
    }

    async validateregistrationandConfirm(){
        await expect(this.confirmregister).toBeVisible()
        await expect(this.registrationconfirmationtext).toBeVisible()
        await this.continuebutton.click()
    }


}
export default registerpage