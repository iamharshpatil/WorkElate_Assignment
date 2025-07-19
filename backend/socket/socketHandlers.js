module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('join-room', (roomId) => {
      socket.join(roomId);
      socket.to(roomId).emit('user-joined', socket.id);
    });

    socket.on('cursor-move', ({ roomId, cursor }) => {
      socket.to(roomId).emit('cursor-move', { userId: socket.id, cursor });
    });

    socket.on('draw-start', (data) => {
      socket.to(data.roomId).emit('draw-start', data);
    });

    socket.on('draw-move', (data) => {
      socket.to(data.roomId).emit('draw-move', data);
    });

    socket.on('draw-end', (data) => {
      socket.to(data.roomId).emit('draw-end', data);
    });

    socket.on('clear-canvas', (roomId) => {
      socket.to(roomId).emit('clear-canvas');
    });

    socket.on('disconnecting', () => {
      const rooms = [...socket.rooms].filter((r) => r !== socket.id);
      rooms.forEach((roomId) => {
        socket.to(roomId).emit('user-left', socket.id);
      });
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};