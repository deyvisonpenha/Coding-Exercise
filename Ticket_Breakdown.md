# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket 1: Database schema modification for storing custom ids
### Description: 
Modify the database schema to add a field for storing custom ids for Agents associated with a Facility.

### Acceptance Criteria:

The database schema has been modified to include a new field for storing custom ids.
The new field is linked to the Facility and Agent tables.
### Effort Estimate: 4-6 hours

### Implementation Details:

Identify the existing schema and design the new schema to add a field for storing custom ids.
Update the schema with a new field for storing custom ids.
Verify the schema update and ensure data consistency.
Create documentation to reflect the new schema changes.

## Ticket 2: User Interface Modification for Facility to add custom id for Agents
### Description: 
Modify the user interface to allow Facilities to enter custom ids for Agents associated with them.

### Acceptance Criteria:

The user interface has been modified to allow Facilities to enter and update custom ids for Agents.
The new custom id field is displayed on the Agent details page.
### Effort Estimate: 8-10 hours

### Implementation Details:

Identify the current user interface and make necessary changes to add a new custom id field for Agents.
Verify the functionality and ensure data consistency.
Create documentation to reflect the new user interface changes.

## Ticket 3: Report generation with custom ids and hours worked
### Description: 
Modify the report generation functionality to use custom ids for Agents, if provided by the Facility, and include the total number of hours worked by each Agent in the generated report.

### Acceptance Criteria:

The report generation functionality has been modified to use custom ids for Agents, if provided by the Facility.
The custom id is used in place of the database id for the Agent on the reports generated for the Facility.
The report generation functionality has been modified to include the total number of hours worked by each Agent in the generated report.
The hours worked are displayed alongside the Agent's custom id and other metadata.
### Effort Estimate: 10-12 hours

### Implementation Details:

Modify the report generation code to use custom ids, if provided by the Facility.
Modify the report generation code to include the total number of hours worked by each Agent.
Verify the functionality and ensure data consistency.
Create documentation to reflect the changes in report generation.

## Ticket 4: Agent Timesheet Calculation
### Description: 
Add a function to calculate the number of hours an Agent worked based on the Shifts they worked in a given quarter.

### Acceptance Criteria:

The function has been added to calculate the total number of hours worked by an Agent.
The calculation takes into account the shifts an Agent worked in a given quarter.
### Effort Estimate: 8-10 hours

### Implementation Details:

Identify the current function to retrieve Shifts by Facility and modify it to include the total number of hours worked by an Agent.
Create a new function to calculate the number of hours an Agent worked based on the shifts they worked in a given quarter.
Verify the functionality and ensure data consistency.
Create documentation to reflect the changes made.

## Ticket 5: Integration testing
### Description: 
Perform integration testing to ensure that the changes made to the system do not break existing functionalities and the system is functioning as expected.

### Acceptance Criteria:

Integration testing has been performed to ensure that the changes made.
### Effort Estimate: 6-8 hours

### Implementation Details:

Design test cases for integration testing.
Execute test cases.
Ensure that the system functions as expected.
Create documentation to reflect the changes made.