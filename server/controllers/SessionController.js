const Session = require("../models/Session");

const allBranches = ["CSE", "IT", "ECE", "EI", "MECH", "CIVIL"];

const createSession = async (year) => {
  try {
    for (const branch of allBranches) {
      // Create session for Jan to June (Even Semester)
      const janToJuneSession = new Session({
        from_year: year+1,
        to_year: year+1,
        from_month: "January",
        to_month: "June",
        enrolled_branch: branch,
      });
      await janToJuneSession.save();

      // Create session for July to December (Odd Semester)
      const julyToDecSession = new Session({
        from_year: year,
        to_year: year,
        from_month: "July",
        to_month: "December",
        enrolled_branch: branch,
      });
      await julyToDecSession.save();
    }

    console.log(`Sessions for the year ${year} have been created successfully.`);
  } catch (error) {
    console.error("Error creating sessions:", error);
  }
};

exports.createNewSessions = async () => {
  const currentYear = new Date().getFullYear();
  await createSession(currentYear);
};