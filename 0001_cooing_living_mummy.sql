CREATE TABLE `photo_submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`contributorName` varchar(80) NOT NULL,
	`placeName` varchar(100) NOT NULL,
	`location` varchar(180) NOT NULL,
	`caption` text,
	`placeImageKey` varchar(240) NOT NULL,
	`profileImageKey` varchar(240) NOT NULL,
	`status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending',
	`isFeatured` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`reviewedAt` timestamp,
	CONSTRAINT `photo_submissions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `photo_status_created_idx` ON `photo_submissions` (`status`,`createdAt`);