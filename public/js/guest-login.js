const guestLoginHandler = async function(event) {
  console.log('guest login route hit');
  event.preventDefault();

  const response = await fetch('/api/user/guest');

  if (response.ok) {
      document.location.replace('/game');
  } else {
      alert('Failed to login as guest');
  }
};

document
  .querySelector('#guest-login')
  .addEventListener('submit', guestLoginHandler);