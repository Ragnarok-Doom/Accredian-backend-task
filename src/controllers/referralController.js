const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createReferral = async (req, res) => {
  try {
    const { referrerName, referrerEmail, refereeName, refereeEmail, refereeMobile } = req.body;

    if (!referrerName || !referrerEmail || !refereeName || !refereeEmail || !refereeMobile) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
        refereeMobile,
      },
    });

    res.status(201).json({ message: 'Referral submitted successfully', referral });
  } catch (error) {
    console.error('Error saving referral:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { createReferral };
