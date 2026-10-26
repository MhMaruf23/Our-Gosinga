CREATE TABLE `photo_uploads` (
	`key` varchar(240) NOT NULL,
	`kind` enum('place','profile') NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`usedAt` timestamp,
	CONSTRAINT `photo_uploads_key` PRIMARY KEY(`key`)
);
--> statement-breakpoint
ALTER TABLE `photo_submissions` ADD `consentToPublicDisplay` boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE `photo_submissions` ADD `consentVersion` varchar(40) NOT NULL;--> statement-breakpoint
ALTER TABLE `photo_submissions` ADD `consentedAt` timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE `photo_submissions` ADD `reviewedBy` varchar(64);--> statement-breakpoint
CREATE INDEX `photo_upload_created_idx` ON `photo_uploads` (`createdAt`);