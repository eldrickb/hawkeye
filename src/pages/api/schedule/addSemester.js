import Schedule from "../../../data/Schedule";

export default function handler(req, res) {
    if (req.method === "POST") {
        const schedule = new Schedule(req.body.schedule);

        const result = validate(schedule.addSemester(req.body.semesterId));

        if (!result.success) {
            res.status(500).json(result.message);
            return;
        }

        console.log(JSON.stringify(schedule));

        res.status(200).json({
            schedule: schedule,
        });
    } else {
        res.status(400).json({
            message: "POST to this endpoint",
        });
    }
}
