import User from '../models/User.js'; 

export async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUserById(req, res) {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found 😿' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateUserById(req, res) {
  try {
    const userId = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found 😿' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteUserById(req, res) {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndRemove(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found 😿' });
    }
    res.status(200).json({ message: 'User deleted successfully 😼' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}