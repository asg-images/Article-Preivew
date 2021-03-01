
//Put the two elements i want to use into variables, so socials class goes into share variable
const share = document.querySelector('.socials');
const button = document.querySelector('.share-button');

//hide the share variable which is the socials class all of social icons
share.style.visibility = ' hidden';


//when clicked if share variable shows hidden show it, if not hide it
button.onclick =  () => {
  if (share.style.visibility === 'hidden') {
    share.style.visibility = 'visible';
  } else {
    share.style.visibility = 'hidden'
  }
};
