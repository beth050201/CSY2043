function check(form)/*function to check email & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.email.value == "test" && form.pswrd.value == "test")
  {
    window.open('personalTracker.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Incorrect Email or Password")/*displays error message*/
  }
}