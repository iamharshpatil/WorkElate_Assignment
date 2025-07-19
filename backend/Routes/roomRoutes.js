const express = require("express");
const Room = require("../models/Room");
const app = express()
const router = app.router


router.post('/join', async (req, res) => {
  const { roomId } = req.body;
  if (!roomId || roomId.length < 6) {
    return res.status(400).json({ error: 'Invalid room ID' });
  }

  try {
    let room = await Room.findOne({ roomId });
    if (!room) {
      room = new Room({ roomId });
      await room.save();
    }
    return res.status(200).json(room);
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
});


router.get('/:roomId', async (req, res) => {
  try {
    const room = await Room.findOne({ roomId: req.params.roomId });
    if (!room) return res.status(404).json({ error: 'Room not found' });
    return res.status(200).json(room);
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;