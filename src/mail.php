<?php
//defining the fields - using filter_var so that it sanitizes input
$name = filter_var($_POST["name"], FILTER_VALIDATE_STRING);
$subject = filter_var($_POST["subject"], FILTER_VALIDATE_STRING]);
$email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
$message = filter_var($_POST["message"], FILTER_VALIDATE_STRING);

if(validateName($name) && validateSubject($subject)
&& validateEmail($email) && validateMessage($message)){
    mail("mohammed4685@outlook.com", $subject, $message);
    header("Location: /contact");

}
else{
    header("Location: /contact");
}

function validateName($name)
{ //using regex to validate name
    $name_exp = "//";
    if(preg_match($name_exp, $name))
    {
        return true;
    }
    return false;
}

function validateSubject()
{ //using regex to validate subject
    $subject_exp = "//";
    if(preg_match($subject_exp, $subject))
    {
        return true;
    }
    return false;
}

function validateEmail()
{ //using regex to validate email
    $email_exp = "//";
    if(preg_match($email_exp, $email))
    {
        return true;
    }
    return false;
}
function validateMessage()
{ //message should be less < 500 chars
    if(strlen($message) < 500)
    {
        return true;
    }
    return false;
}