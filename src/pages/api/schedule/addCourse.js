import { validate } from "../../../data/Result";
import Schedule from "../../../data/Schedule";

export default function handler(req, res) {
    if (req.method === "POST") {
        let schedule = new Schedule(req.body.schedule);

        const result = validate(
            schedule.addCourse(req.body.courseId, req.body.semesterId),
        );

        if (!result.success) {
            res.status(500).json(result.message);
            return;
        }

        res.status(200).json({
            schedule: schedule,
        });
    } else {
        res.status(400).json({
            message: "POST to this endpoint with a schedule",
        });
    }
}
