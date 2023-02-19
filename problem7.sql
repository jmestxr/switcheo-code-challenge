SELECT T.address
FROM trades T, (
    SELECT B.address, (
        CASE B.denom
        WHEN 'usdc' THEN B.amount*0.000001
        WHEN 'swth' THEN B.amount*0.00000005
        ELSE B.amount*0.003
        END
    ) AS amount
    FROM Balances B
) AS BB
WHERE T.address = BB.address AND T.block_hesight > 730000
GROUP BY T.address
HAVING SUM(BB.amount) > 500;


-- ================================== TESTING ==================================
-- create table main (
--     address text primary key;
-- );

-- create table balances (
--     id int,
--     address text,
--     denom text,
--     amount bigint,
--     block_height int,
--     primary key(id, block_height),
--     foreign key (address) references main(address)
-- );

-- create table trades (
--     id int,
--     address text,
--     denom text,
--     amount bigint,
--     block_height int,
--     primary key(id, block_height),
--     foreign key (address) references main(address)
-- );

-- insert into main values
-- ('0xabab'),
-- ('0x99cc'),
-- ('0x67f3');

-- insert into balances values
-- (1, '0xabab', 'usdc', 50000000000000, 733755),
-- (2, '0x99cc', 'swth', -20000000, 733757),
-- (3, '0xabab', 'usdc', -50000000000, 733855);
    
-- insert into trades values
-- (1, '0xabab', 'swth', 400000000000, 733756),
-- (2, '0x99cc', 'usdc', 3500000000000, 733757),
-- (3, '0x67f3', 'swth', 72000000000000, 733758);
