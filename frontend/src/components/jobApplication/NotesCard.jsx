export default function NotesCard() {
  const points = [
    "Your Educational Qualification and Experience should match the Job Requirement",
    "Your profile should have 80% of Keywords matching with the Job profile",
    "You shouldn’t have applied for the same Job profile earlier",
    "The current Job that you are applying for should have been posted recently. Preferably, within one week."
  ];

  return (
    <div className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-md ">
      <h2 className="text-lg font-semibold text-blue-700 mb-4">
        Points to be Noted
      </h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ol>
    </div>
  );
}