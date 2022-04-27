import Schedule from "../../../data/Schedule";

export default function handler(req, res) {
    res.status(200).json({ schedule: new Schedule() });
}
