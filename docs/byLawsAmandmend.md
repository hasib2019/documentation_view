---
title: 'By Laws Amandmend'
date: '2024-06-24'
parent: null
order: 1
author: Md. Hasibuzzaman
category: General
tags: ["intro", "getting-started"]
---

| Product Name     | Product Version | Module Name | Feature Name    | Update Date  | Updated By      |
| ---------------- | --------------- | ----------- | --------------- | ------------ | --------------- |
| bylaw Amendment  | 1.0.19          | Migration   | bylaw Amendment | 23/04/2024   | MD Hasibuzzaman |





# Objective

Objective of this document is to provide a detailed overview of the bylaw Amendment Module of the RDCD Management API. This document will provide a detailed overview of the features, operations, dependenciess and additional resources available in the module.This includes bylaw Amendment.

# Operations

# 1. bylaw Amendment

<!-- ![My image alt text](../../../public/image/samity_upload.PNG) -->

## Route: http://localhost:3090/coop/samity-management/bylaws-amendment

| Resource Name                          | Resource Type        | Operation | Remarks                                                             | Database Column        |
| -------------------------------------- | -------------------- | --------- | ------------------------------------------------------------------- | :--------------------- |
| host:port/application/bylaws-amendment | **API - Validation** | POST      | When send it will be appli and data store in coop.application tabel | coop.application->data |
| host:port/application/bylaws-amendment | API                  | PUT       | This api will be data only update                                   | coop.application->data |
| host:port/service-info?id=             | API                  | GET       | get service ruls for documnet                                       |                        |

# Dependencies

coop.application, coop.samity_info, coop.samity_document,

# Additional Resources

By laws service is create on redux and useImmer.
there are some component using this Component, main component handle the other component.
component name: DynamicByLaws, MemberAddress, OfficeAddress, RequireDocument, SamityName, WorkingAddress.

first useEffect call on Redux dispatch and get the data then set the data on setByLawsData,if main table not found ByLaws hen go to applicaiton table if found then set data, if not found then using amendment.json file and set the data.
then other operation will be run.........

---
