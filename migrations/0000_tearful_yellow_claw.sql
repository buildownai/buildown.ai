CREATE TABLE `waitlist` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`created` integer NOT NULL,
	`modified` integer NOT NULL
);
