const Event = require('../models/Event');

module.exports = {
  async getEventById(req, res) {
    const { eventId } = req.params;
    try {
      const event = await Event.findById(eventId);

      if (event) {
        return res.json(event);
      }
    } catch (error) {
      return res.status(400).json({
        message: 'Event ID does not exist',
      });
    }
  },

  async getAllEvents(req, res) {
    const { event_type } = req.params;
    const query =  event_type ? { event_type } : {};

    try {
      const events = await Event.find(query);

      if (events) {
        return res.json(events);
      }
    } catch (error) {
      return res.status(400).json({
        message: `We don't have any event yet`,
      });
    }
  },
};
