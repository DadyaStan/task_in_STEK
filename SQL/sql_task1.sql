-----------------------------------------------------------------------------------------------------
---------------- TASK 1 -----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION stack.select_count_pok_by_service(
	service_number text,
	query_date date
)
RETURNS TABLE (
	acc int,
	serv int,
	count bigint
) AS $$
BEGIN
	RETURN QUERY
		SELECT
			stack.Accounts.number AS acc,
			stack.Counters.service AS serv,
			COUNT(*) AS count
		FROM stack.Meter_pok
			INNER JOIN stack.Counters ON stack.Meter_pok.counter_id = stack.Counters.row_id
			INNER JOIN stack.Accounts ON stack.Counters.acc_id = stack.Accounts.row_id
		WHERE
			stack.Counters.service = CAST(service_number AS int)
			AND stack.Meter_Pok.month = query_date
		GROUP BY
			stack.Accounts.number, stack.Counters.service;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM stack.select_count_pok_by_service('300', '20230201');