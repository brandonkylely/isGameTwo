const router = require('express').Router();
const { User } = require('../../models');

// POST /api/user is a registration route for creating a new user
router.post('/', async (req, res) => {

  try {
    // test if username already exists
    const userFind = await User.findOne({
      where: {
        username: req.body.username
      }
    });

    if (
      userFind ||
      req.body.username.toLowerCase() === 'guest' ||
      req.body.username === null ||
      req.body.username === undefined
    ) {
      req.session.usernameError = true;
      return res.redirect('/signup');
    }
  
    if (
      req.body.password.length < 4 ||
      req.body.password === null ||
      req.body.password === undefined
    ) {
      req.session.passwordError = true;
  
      return res.redirect('/signup');
    }


    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;
    });
    //need to only be redirecting, not also rendering, that was the bug
    res.redirect('/game');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // POST /api/user is a registration route for creating a new user
// router.post('/', async (req, res) => {
//   console.log(req.body);
//   try {
//     await User.create({
//       username: req.body.username,
//       password: req.body.password
//     });
//     //need to only be redirecting, not also rendering, that was the bug
//     res.redirect('/game');
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// POST /api/user/login is a login route for an existing user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username
      }
    });

    if (!user) {
      req.session.usernameError = true;
      return res.redirect('/login');
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      req.session.passwordError = true;
      return res.redirect('/login');
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.loggedIn = true;

      res.redirect('/game');
    });
  } catch (err) {
    res.status(400).json({ message: 'No user account found!' });
  }
});

router.post('/guest', async (req, res) => {
  req.session.save(() => {
    req.session.username = 'guest';
    req.session.loggedIn = true;

    res.redirect('/game');
  });
});

// POST /api/user/logout is a logout route for an existing user,
//it also destroys the session so the user is no longer logged in
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
