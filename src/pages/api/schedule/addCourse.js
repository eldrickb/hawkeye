import Schedule from "../../../data/Schedule";

export default function handler(req, res) {
    if (req.method === "POST") {
        const schedule = new Schedule(req.body.schedule);

        if (!schedule.addCourse(req.body.courseId, req.body.semesterId)) {
            res.status(500).json("failed");
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
