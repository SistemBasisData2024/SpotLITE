--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3 (Postgres.app)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: albums; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.albums (
    id integer NOT NULL,
    artist_id integer,
    title character varying(100) NOT NULL,
    release_date date,
    cover_url text
);


ALTER TABLE public.albums OWNER TO neondb_owner;

--
-- Name: albums_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.albums_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.albums_id_seq OWNER TO neondb_owner;

--
-- Name: albums_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.albums_id_seq OWNED BY public.albums.id;


--
-- Name: artists; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.artists (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    photo_url text
);


ALTER TABLE public.artists OWNER TO neondb_owner;

--
-- Name: artists_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.artists_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.artists_id_seq OWNER TO neondb_owner;

--
-- Name: artists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.artists_id_seq OWNED BY public.artists.id;


--
-- Name: musics; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.musics (
    id integer NOT NULL,
    album_id integer,
    title character varying(100) NOT NULL,
    cover_url text,
    artist_id integer,
    music_url character varying(255)
);


ALTER TABLE public.musics OWNER TO neondb_owner;

--
-- Name: musics_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.musics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.musics_id_seq OWNER TO neondb_owner;

--
-- Name: musics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.musics_id_seq OWNED BY public.musics.id;


--
-- Name: playlist_songs; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.playlist_songs (
    id integer NOT NULL,
    playlist_id integer,
    song_id integer
);


ALTER TABLE public.playlist_songs OWNER TO neondb_owner;

--
-- Name: playlist_songs_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.playlist_songs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.playlist_songs_id_seq OWNER TO neondb_owner;

--
-- Name: playlist_songs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.playlist_songs_id_seq OWNED BY public.playlist_songs.id;


--
-- Name: playlists; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.playlists (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);


ALTER TABLE public.playlists OWNER TO neondb_owner;

--
-- Name: playlists_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.playlists_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.playlists_id_seq OWNER TO neondb_owner;

--
-- Name: playlists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.playlists_id_seq OWNED BY public.playlists.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO neondb_owner;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO neondb_owner;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: albums id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.albums ALTER COLUMN id SET DEFAULT nextval('public.albums_id_seq'::regclass);


--
-- Name: artists id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.artists ALTER COLUMN id SET DEFAULT nextval('public.artists_id_seq'::regclass);


--
-- Name: musics id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.musics ALTER COLUMN id SET DEFAULT nextval('public.musics_id_seq'::regclass);


--
-- Name: playlist_songs id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.playlist_songs ALTER COLUMN id SET DEFAULT nextval('public.playlist_songs_id_seq'::regclass);


--
-- Name: playlists id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.playlists ALTER COLUMN id SET DEFAULT nextval('public.playlists_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: albums; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.albums (id, artist_id, title, release_date, cover_url) FROM stdin;
11	8	KING (cover)	2021-08-31	https://previews.dropbox.com/p/thumb/ACSptMkDt6GaFQ6t7LV8sQFpox_C5rDmpB-3fk4vx-HA9w90Ew9tv_zShjnWRXfLJ5iBFxeweOYCaNgXE50sTO1d_MPE35fHSdBxSi_ryvjAuQTUtGawTzU61NrRLjDLc0XB8dogUbRY7i0vZ8z72NXcDMiQclTT1ZaYgJbKfC5i7Qs21oIyZ5wA1gCzJfY768jLf0E83YJUkXSbmDLQvgHISlW9nQ0QWMMLWAZX_dWdZQCujGxXs-UQZvIZ1lvUvJBBij0taK1ICxFpnxrM2zfUmafrKAOmh_FgNso4YL0PblX1tB81nMMHgm3h3zFVC8Cq9lQ1Z8nTptOTsJYPGKpZ/p.jpeg
12	8	Roki (cover)	2020-05-31	https://previews.dropbox.com/p/thumb/ACQstlwMIyhrQpSSQkTtZGeeHxsuY1P9IQZ4BSwCIvOTW_0lI8YI087MHEv4e-9uGJnWwwBoysntvYnxit_6PrcS2rGljoQOqHjKlH4U-L7wxASGzdY7hll7BVWdh1HYuK5NeXPJ0Ae2ibfMhFmCkigoRTLFCdyf9PHAzcxRagL2xd_KVcQReW1-s6i_CfuPt4fN7wWZHAl_-UCyvjR8WeK8IbuqzIcoSERwL4goSwvwy3EV5OSQ2_a2aso0yyL6IRM1jI7LAptjxxW7BEJox8Pa5_10SJBwwIGTr0qK8e1qhBVYQYEKVlu7NDnDko49y93z1O3jdptXnKTs_8ZQcrUz/p.jpeg
13	9	Crying for Rain	2019-01-30	https://previews.dropbox.com/p/thumb/ACQl6okwvwuTzh_VfPgsmw3am3XtU1zBXtlsrcLs9wDfsbT-pWRm2-WUEvL-GLkpLWcvWIGVMlzgZhLW6QZfQVq5QMOUr4AOpy8Nm8dPQ67l2GDaP_6hbkK0LkfL_lWip_GHFPWlQ4znFPMaPOcah6Si7b2BBUVaoiNhYcCBk9LXWvYUB4MC_3bENTFtB59GdyHu8sQ6NaQ_M4bQFxumqWELYVR8RMuYcAYrbcyKSQFQfuLsknuDO8c6oSzoY9jPLPplI9EmQYJk7AHdY6e3GPpditjZTDT7c050Whg2lUrwGjk3gU5Prt3dNLRX22Cheo53vrIieo27g3_iLNjsUm4E/p.jpeg
7	5	Torna Original Soundtrack	2018-12-14	https://previews.dropbox.com/p/thumb/ACR2mbR5q50UCIOYW98vnjUAJMpnnH_R0jXYBiImk2gPiTl2dD2M3j6--ASCp4Q7dCcn9gW-3qijtH12Q7NRe3dCz9eUULb_4vAas8JfYnfDvZfp7BUJpTUy9V_AM74GLVTLpwC9vjMUXqZYueF7Mh6ZByKLd2ZVIYP_O-1Oi5osHmPgz8atAuT0CF338zgcpgy3oUoL-9RbhnTPnxvK5QhrD7rIb-p0zp0AA10_tdcyNA8910GaQ6wPZ5wh_U4DnEKqt5dUgXW-qO5XxuE5siqx93ZmxESRMZogsGd8Yo3YKhrG-uzGg94NrlU0Lovim5moPqvBnTtu-GdNEOsrCrDQ/p.jpeg
8	6	Xenoblade 3 Original Soundtrack	2023-08-02	https://previews.dropbox.com/p/thumb/ACR7SZHil7588WgKvwiF0DmmUgAF4UXeTRli7snTZEzq0waiLRG0XMQO3Lb-CsLFp8OhYFeUMwcEttKG3ev466ciGuiO2G7FOIOBpOm7Hg-trfrClrw-xUGwHMyFwC6BtMyWX4kEVxA66u84gOiC_ZSWkORCh3FRSwJJNTPlpcS1morinSZ3zIGzTIuWLLdiaU4Cbmz2dcUK8hh4o0ntA9tYbM6fyB9FD6yCh462hNLD1oOHt9XbeAZOEkVtsfsjey_MCRgPRWbZq2O16LWnk-uS9CyEOngs-GnIQSvUgSqHbB6-EzUbBz4AaMZzH3gFMZM9xhz15aPMZXT7xAYA38cf/p.jpeg
9	7	Xenoblade 3 Original Soundtrack	2023-08-02	https://previews.dropbox.com/p/thumb/ACR7SZHil7588WgKvwiF0DmmUgAF4UXeTRli7snTZEzq0waiLRG0XMQO3Lb-CsLFp8OhYFeUMwcEttKG3ev466ciGuiO2G7FOIOBpOm7Hg-trfrClrw-xUGwHMyFwC6BtMyWX4kEVxA66u84gOiC_ZSWkORCh3FRSwJJNTPlpcS1morinSZ3zIGzTIuWLLdiaU4Cbmz2dcUK8hh4o0ntA9tYbM6fyB9FD6yCh462hNLD1oOHt9XbeAZOEkVtsfsjey_MCRgPRWbZq2O16LWnk-uS9CyEOngs-GnIQSvUgSqHbB6-EzUbBz4AaMZzH3gFMZM9xhz15aPMZXT7xAYA38cf/p.jpeg
10	8	end of a life	2021-10-01	https://previews.dropbox.com/p/thumb/ACSYSzwxr924_jsswbXdcYQXUVdxyjALVVkHMwsfz4yopPCz6wO-FIXiYV9KUU-xZLYAJNgJtJzRqm2h_K19x8Avkp91D_unGbtC0RXFJ_eCi7Vf5p5Gpu3bKwP3l4l-xy1vMecq4HyKVS_KdUv3W8xaIrkRHy_cvQquxadG1dSBjzhATsffh7vZRWxIXZWuZFpBj3MJduSV-cYZDwYeKibglvcp3Q2FLsmpY9KmqKCSwacftKG-jsp-3i-skm-pOQll6g9L18x_RPIkdMm0U9OcfyIBpAtv4o0lOgqgXhQFtd8tIc981jneCmBUWe8z5Wi6Kz9QSsMuOiRX6R-McsNV/p.png
14	9	ETERNAL BLUE	2018-02-21	https://previews.dropbox.com/p/thumb/ACQa1SMpobsUybSeLAl3-_UoRq0_UnHsn49lL5M-4mNoBAYEs_VojuafEponq9HtwkN8qk2OcL6Z4F_WVmIyPUZqSa20e-7CQZPYy8tmZhHEinNkV3jJ0lDZ7nlpEDuWh_VN0HNo-9kAUbnPopu1phNxnGPkEYqI1rdZ7vcIVSgLi-vpKm4MqCp7C9EUVUFoLg1FPuBovNwijqzX16k32fvA6FTM_lXISpGqkZ-2Nrxw_6grehjoL2wu-PuUDBvQhYKMcEAgjIDMXteSLofu9uRkkD2bSBufTAKLGuI_sKL7gz5o1hiqmWpMfKu5IYEyMGpTYWdyJOOzsIU7WYujBGtH/p.jpeg
1	1	Dice and Roll	2024-03-20	https://uc15e22f50e76b1dda4804ec572e.previews.dropboxusercontent.com/p/thumb/ACSF5vvJYhfdrVD0jZ2-nv-51b05qKx9lAiMt3F9Cnp2EkcGNt_5o9XbEdxHSeafpZvVpJXAZLCdIOtHdsK2SO9YG2lw1zoSdUd81TndaPWf8txBYHR0-cPPG7Wh1MaulEBmPy7efyZqwjUl7iy6u6aSrwmbEWn_dMs64qnPqC0TaDw_D78t02RP6o8N5de3i3cvsHW6Ytskb5v5pQ-xZ9vhiZSDgdT74wcn-KdIdHymcPxZP8GAVJ1sCheDu-x4BiOR0p5sCWEwH0QX4kHRX7b8NzOtXdQYbe_1CMky8D121xcH7vwpwAxWR-Xc8DTd9kFpgoP0ZYXhWg2qQFA9H1SlTgIBYSXFV7z_U06Xc7_CRoGMOB61ARdBpStVUpp1igYpbRConf9-1kdVPHPKoPD3/p.jpeg
2	2	Album 1 (sleep, calm, relax, mediation, study, stress relief)	2022-07-26	https://previews.dropbox.com/p/thumb/ACRHQ81M68XB04xfTzB53O5XeLUwi3FA3HNh1Dl5ZvwiKPEpMd4XGZCPHXBhNWr6knNx0Tb3P55FfzPIWHaSvrZXDmOe3ro0RQV6-SYXM7lYRF2aylE4c9cZ9gZJUt1hwcb9qTEVtCfjGEQ0Wony_kwmGXM5Stm39zVXvac81mrV7UyOKxN30bnxwAcZ_jC93NeWdrDnOURTbWL3b36EUCD3MyQ2gtk9uK8NCqctxmbWWV5ZElCiDVGklkzWZZ34BepNCdU50tHHWsLYkrBtmNc0RD7jeVOeOYf27rmkKkhqq5dBkPowtGO-X_4TqgXFlW9uM0nYyy12oHm2CtF6Mvl-/p.jpeg
5	4	Xenoblade Original Soundtrack	2010-06-23	https://previews.dropbox.com/p/thumb/ACTUtDsFxREaqlXgBlyRp0R-Q0OOBtG6-MQKpGD2H3h37raafeDnoIeq5Q0FKs8l1S9tT4iIbqq2T7P8dWbqsTlzv3sA0wbw-EOYoBh-mYHKJAzcOnytWrbaNAU4n7moy5cnwBJ6ZB8vKpEbzsmyoy478OW-qdCfflLTIFkxCGXKXQVpTcuuwGguCIREna5JZDHN5LO3O5GUlpDHZg9BG84B-nmK4u--6hQGyq2bUmBoktGfpP2DzkhU92TrIWNkNyuYWLJEwBrL6O8sb6wsS5LchdbrfB0PhsPNvxKbHlqGmCAI_JjKaxuVIYZT0IxLH9RlmEnqYEwwUMyWqnXhCz2V/p.png
6	5	Xenoblade 2 Original Soundtrack	2018-05-23	https://previews.dropbox.com/p/thumb/ACSHpSsHlVP-qfvdOmKTYo-RN_gNdvkZlB1CUGJnJFbijxyqt2IGCDBYqDAq40xe3D7pbwrcdVSoR_6oItyn0U_cM3rKrM6wI34f9mRVB3v4v3OgF3dsHYOfUB6P53GtJq6iJ3wfgf-fzRskosWGKaC1EMvv5hAPotZbg7FB52O1lYUDdbbVSOUeiNkJpwgSR1GseFacVdMKQOmvhmqwUk3W3ozp-FZgeefDbt33qUTCNtJyYd-mbbj5uKIOOHRdqEsGjHIMDLxc8vuChtLJPPaaKOTXygg7d0YZ-iapdLsXYqOF1KGucZF-iA2EEJEmzXOkqfseEL9lzchiYIvE_DOK/p.jpeg
15	10	Anfang	2018-05-02	https://previews.dropbox.com/p/thumb/ACSiA4bQQzl-s6NgSpkRtEXUvDvkuWwMogohCi6ztVvF0X1GCpg4qK-xYsXKjOGComDpbXf5owMgPeu0YKGPW30mhkCHrv-pIj1nzhulovrLaKrX3IrAVcEHHhWgBeeo1Y-q1mm2YsnKNYdoHhS-Evb8vOzzD7o3n1tBK6GJETMBL0SvFIAmxbhu8T9c4oRIPLcPvTeKu5EE1b0o1HQtIPQrBLQTnwhDpH1m0QbfhrgwYxiIpBzQHjKvmkok_8VMVOI_qdP55aE1saQfwPYdvTIN09NIhgHXb8pnXk717xLwisqYsDmuJfZ7DRSDyx3H7Mgop3SFfg23cJWlBUJ5GezF/p.png
\.


--
-- Data for Name: artists; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.artists (id, name, photo_url) FROM stdin;
1	Odetari	https://uc96c343c86ae0054f43fdba3506.previews.dropboxusercontent.com/p/thumb/ACSaN78q7HpzJtkaLHy3Fz534cgqpW_o8QNDBYixgty451z5TqVUnTpI7DO6TBBaZ3WmUX9hkQpRE6HNHjElTE4CMwK3ltRyvJxqQrjM_V468XeTS_lpNA70sX5-gjKqDbFf8o4DirptXemTvR5rLSWr2WJc6xs5yXxQ0cEE_ODJcbk-nF2TRczNnwrTQEtgDi9sZzcdqcCK1qima61OuQdiNkiiN90nTBuoNNTQN1ujxWKt_Ecn18Cv9MQJ5qwbr5zMyoaYQ-M6BabQ0GgFz4hzGqa-2REx-jq53IFS9AFRrXUdas1a4gc-SZImEvBRzQto9dlYbXrLasAv_UPlK_1YwGMa209Okv9TTzZftQpbs1MsXAU8X8nyHQgJTcf57PrVX-BBodbMylc8cHwkzDnY/p.jpeg
10	Roselia	https://previews.dropbox.com/p/thumb/ACRU8xOxtZUNzqZg8Am8SqUCPPLkDjdRuZTFNq2M3kPpYDzpAo5SMRmDM666pGgJcOILw9lNkYVd7UH_AYuJXR11TXgvIjn6SKB-Br7gDZUcNksGTNwk34bZDKnzRbcmP6BXudAdRUFzgKko3f9ck3MHlPDxhwuUBb3sRe43VVF8L-YHQAZSNGQ76xfvv7dAf78KJR5xmPBaL0vsuxH580CjZsvmIIEo2YIqMxFqj-4Hbr0dJcAomGIvDnwNciynDP6K8N_b1u-5hsebht5gSGUMNnz5-T6gfS_1VxNjLAHDpbKUR3iqtr0HxJWeZYtsKQkC-JOqLpFkEwlEq2cDtWMH/p.png
4	Sarah Alainn	https://previews.dropbox.com/p/thumb/ACSVRu6-7PY-JRmg9sMAllk61JTmcgVDqccN9V5rF0vYVVRvsXMlofNcR3DG_7MAaZDA3iTSUqPN74BPfTPRN_TROj8OR-KDX_bso9p6mH8J1-dUJ-69hXC5ETBprTmsAStdBBH5U8sochtzMsLplqPSsZzq4jJ2yUtiduZ0_H21BdhiYkuU2DBPrmR3uVQdlURve671v6UUZdSO1y1HH7rP-TPg9MdXb1Z7v095D7Dnj-MhFHPAiZnlMRaiDRpjeqKz5aZXidy0IQbTPhXpdNf4VkTDyj_5zm2lWjdF21xI5CSqkU75UUmzSw6NJsQHe0-kEd9JwmAi-yzL1bZ9m35d/p.png
5	Jen Bird	https://previews.dropbox.com/p/thumb/ACTf8v-jQTKle1j-Q8cf38jv9Dc3p80sRtT8-rd1WVRelEFLAsEcsp2OwAZ7gOnXb2uj_P5MWM5N3vBZaZH-rk6RDbdJ0mc0ub6acI8eh-vovB-2oZFilhSpzoKv57ccHr-NzrTq2iGVrYeQgW9PQjidF_590wqDMKFFNPRRBc4Q6Z1PyAXSx2I1VBwsFUOxcUiSwxMOLjRrjD52EinuOSDdhesrcCByY72vwUmwQ68MwyntBfl3vZ9kzabkOJgNxZ8J0vuHUxF2cRo3PA0k3ibutD4rHwRvYFm1IbZNdDLMog3F8mLXKGTDaQQGf8709WBIGpjOY7rNbf7x9LdMhh8t/p.png
6	Sara Weeda	https://previews.dropbox.com/p/thumb/ACTl_TGfeHti5nqPVgxcCRdd7agVynMXW1XWcwNb5ofFVFxZQ7Kjio_Dh3msNOUAEBwYO8LDIc4aiZf3asL12uFArhWi6swBBkFo7o3IXVEXO8ItDTK_QBXqHYAtePLMxPJC4YQdbsw9R5YDQLTsaK7Jz5vXB1rl_4-_rliTjuBY76d4rkRb4nnYMnDesT_WOHQc45Ug2ulg1n7TBOpcJ4rLPNV9Y3MlUIMvJN6BaXYpZJjembacLZ_tUgVH-UuUUytqkxFgjz2g18KHCM4zHm-lBwcGU0N1Sa8cURvOzC9LDpBxKqx5VBLCEuz3um8BA4hreTERALGECsdlFYfVZbCL/p.jpeg
7	Joanne Hogg	https://previews.dropbox.com/p/thumb/ACTHeFHk4GB6ASC-Rt6nsg5WycVx_aXKeviXhZNy0ZTdmDVNhLHam2as5vwZ4EV3VYzbhlGFSn_2cJntJZZtBa_ZFTpjpTg0teL_zKNJaC2QcH0BrvOMmHSOBbz6c3fD_z007Ao3YfdYhX_r8-Nx3yIsMewJ5XU4ifBlD4bGmJx4qVPiB7b2bM67VrfTxo_XTNoFkJGVA8zUAOInki9qvOiJkR8dZ8O2pciSQ3y0upnqgiD2XJHohVHAXGbqvd_gnkS5_N1QmSVyJIcfRRVolRlHoMKPARRgFGxlUkLWdSvQ1Fmrv-pcUfV-vAk00AS2UO8PBfz09fIDEW4hJ_7C7fj0/p.jpeg
8	Mori Calliope	https://previews.dropbox.com/p/thumb/ACTWSEWoMCHk2wpMXLA4hXgUGFDzh0XLRos-xGiSjCJBGTSRtU1gwBLIzUp32ZHbYtnryHAzgdWUra0uwJ0EcvMwIdhl9j8Ntqlo9p2_YPnSOPOsvoJIMzh3km8eBWs4XGbWenPHfir05uZ4uEV4JdjmR1hA7WwzON4u3mK_jlyORgmhOIngPxR4HcVTtT_UYnsZEGOAqz5snGu4pBUWg0F7lWHlqh_jY58z5jta8x0Lb0IiAWb22itkENcdV_pLNPsR4etMdA51zPoWWp19OoptsCOzu9Bsq1e92-NkA6WJ_LdsuFm9d_utioAzHBW-CCzFriY61az7NIzu2XuRSjk6/p.png
9	Minami	https://previews.dropbox.com/p/thumb/ACRy3f75xsceUaE3aTBjHkcZ86iuB0F6zhmPz7jn3gjR4Fh2kX7mR2Kve-zjqxH8LViooZd4L6QJhulTf08eabJ4-LV7aMyglEcXdT0iIO9pWhrT3OaS276lMM_NB1zO9_7Z62-3ETGKfCV8Ag_K2eVhWsJGeoum09uHqJOcjPMyhnOFej6h2r1sPzYKWxTp-jPBA9kl1-B1U0SIR7qoHtSsbe8Z6Voiuvlx53l0eoypoEfL89o5DGJhulXw-jirwSvHsyG2wOdSSN2ZJzTwc5wECFFGVCB4-72Xb2yVn7fsi1b4TFPdj5Y_ibnr-S7L4GlEx-obQ-u_O1ftneTaxkhB/p.png
2	Soul & Mind Relaxation	https://previews.dropbox.com/p/thumb/ACQbZ8O9eFOGRN-vrbv6I4kZVgRpkK6LnRTEJFEImULfyXMf_aUbxedrRxok_2JlGqjVbrxMdCuPtvIutD3s-on5kmc4LgHOrku3vejagIEsLZObws7A3CRQ1L8HUiHGhmw1zK7teuI59VVQc4W6yHt-QBDsNMJolyiNuAZGpOsqukxQGHCdz8s24_ktjOMeTYySGkdlT2pDWWXYGV2tDYqS_UuOPnbPNCUiU4fhJgjIFKIWg0TmgzjbjL-GJBJT3cO2fDgwpQlI1rxSTDowxdhAx3B4AjB9NO-6ajtAKQd5a-N-s5yV6VFtcTbRfLEprjea2mHPAWM4ZoHQIJynVNLv/p.jpeg
\.


--
-- Data for Name: musics; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.musics (id, album_id, title, cover_url, artist_id, music_url) FROM stdin;
1	1	Dice and Roll	https://uc15e22f50e76b1dda4804ec572e.previews.dropboxusercontent.com/p/thumb/ACQmet5nP2tZoFm-etdZ7yD8WErHBt4Um72asv2PsNMtjs9vmRgS1k-H3QOy7sCR0YFN5tcj_8iNUjth_b_Z8nM5AtqDRNsaMKtZpDrO3t98qhh1tzvwigO6A15MmZf-JpJ5oGZkHXt5tnUPaBlrqDEQ0_F979JSgL0oAXh_fKAHPT0u13WmK5rjiW6VX5DpVbZd69JuVMG9xUOXRwYU61Dkn8gj2rBBWC40idwT9k4qe1WcT54PAwiBG70VmR2_rjS3v37_0bP36R8U4KyxGPxlZLl5FpdFxmNGGoS89mh_FAN4uk0C9FP1GbaD3nCiATmixBktEPnQMfmLGr-Jti5rTe8DYzHz728qzAAHxIw90JIQsQS8fnYeZrRWJBj4cTwrjJv866FhCVFkMbEUIyoN/p.jpeg	1	https://soundcloud.com/odetari/dice-and-roll
6	2	Track 4	https://previews.dropbox.com/p/thumb/ACRxOVdZESS0nVM4GYTt484heTn6MDiiH0q1oHKFCcS1fFbNGVQ56QmBu55BhDlG5aOi_QtXkslqx9QnIG-268nQcZaJ34AF16HD3VvZIKuRnnJsm2g_q7NBep4LvWMT-s4vZEqT2Crv9Egyw0_FJjJyAQuUdXuE89_lScQL_Q5Y-gaVk3_bTD4Odc0Ni2jrHhKBC5wrtEihvH86njgnayLqIZDUaWe0ReR4hbC0guPhCieBnQ043dA1c0F0kANJRNRSHCJqJUb6kE57cz8tBoyPz_veld_TxAzj6Va49zXDGEIqkC-_C4XGa2IkHpxdWd5zn5qM01IMro61euw4Sckg/p.jpeg	2	https://soundcloud.com/sam_relaxation/relaxing-music-for-sleep-relax-study-stress-relief-and-meditation-track4-new-album?in=sam_relaxation/sets/album-1-sleep-calm-relax
17	8	A Step Away	https://previews.dropbox.com/p/thumb/ACR7SZHil7588WgKvwiF0DmmUgAF4UXeTRli7snTZEzq0waiLRG0XMQO3Lb-CsLFp8OhYFeUMwcEttKG3ev466ciGuiO2G7FOIOBpOm7Hg-trfrClrw-xUGwHMyFwC6BtMyWX4kEVxA66u84gOiC_ZSWkORCh3FRSwJJNTPlpcS1morinSZ3zIGzTIuWLLdiaU4Cbmz2dcUK8hh4o0ntA9tYbM6fyB9FD6yCh462hNLD1oOHt9XbeAZOEkVtsfsjey_MCRgPRWbZq2O16LWnk-uS9CyEOngs-GnIQSvUgSqHbB6-EzUbBz4AaMZzH3gFMZM9xhz15aPMZXT7xAYA38cf/p.jpeg	6	https://soundcloud.com/user-675036643/xenoblade-chronicles-408359519?in=user-675036643/sets/xenoblade-chronicles-3
19	9	Future Awaits	https://previews.dropbox.com/p/thumb/ACR7SZHil7588WgKvwiF0DmmUgAF4UXeTRli7snTZEzq0waiLRG0XMQO3Lb-CsLFp8OhYFeUMwcEttKG3ev466ciGuiO2G7FOIOBpOm7Hg-trfrClrw-xUGwHMyFwC6BtMyWX4kEVxA66u84gOiC_ZSWkORCh3FRSwJJNTPlpcS1morinSZ3zIGzTIuWLLdiaU4Cbmz2dcUK8hh4o0ntA9tYbM6fyB9FD6yCh462hNLD1oOHt9XbeAZOEkVtsfsjey_MCRgPRWbZq2O16LWnk-uS9CyEOngs-GnIQSvUgSqHbB6-EzUbBz4AaMZzH3gFMZM9xhz15aPMZXT7xAYA38cf/p.jpeg	7	https://soundcloud.com/user-675036643/xenoblade-chronicles-485652245?in=user-675036643/sets/xenoblade-chronicles-3
20	10	end of a life	https://previews.dropbox.com/p/thumb/ACSYSzwxr924_jsswbXdcYQXUVdxyjALVVkHMwsfz4yopPCz6wO-FIXiYV9KUU-xZLYAJNgJtJzRqm2h_K19x8Avkp91D_unGbtC0RXFJ_eCi7Vf5p5Gpu3bKwP3l4l-xy1vMecq4HyKVS_KdUv3W8xaIrkRHy_cvQquxadG1dSBjzhATsffh7vZRWxIXZWuZFpBj3MJduSV-cYZDwYeKibglvcp3Q2FLsmpY9KmqKCSwacftKG-jsp-3i-skm-pOQll6g9L18x_RPIkdMm0U9OcfyIBpAtv4o0lOgqgXhQFtd8tIc981jneCmBUWe8z5Wi6Kz9QSsMuOiRX6R-McsNV/p.png	8	https://soundcloud.com/ufqkiottscz8/end-of-a-life-calliope-mori
21	11	KING	https://previews.dropbox.com/p/thumb/ACSptMkDt6GaFQ6t7LV8sQFpox_C5rDmpB-3fk4vx-HA9w90Ew9tv_zShjnWRXfLJ5iBFxeweOYCaNgXE50sTO1d_MPE35fHSdBxSi_ryvjAuQTUtGawTzU61NrRLjDLc0XB8dogUbRY7i0vZ8z72NXcDMiQclTT1ZaYgJbKfC5i7Qs21oIyZ5wA1gCzJfY768jLf0E83YJUkXSbmDLQvgHISlW9nQ0QWMMLWAZX_dWdZQCujGxXs-UQZvIZ1lvUvJBBij0taK1ICxFpnxrM2zfUmafrKAOmh_FgNso4YL0PblX1tB81nMMHgm3h3zFVC8Cq9lQ1Z8nTptOTsJYPGKpZ/p.jpeg	8	https://soundcloud.com/dr-alex-san/king-gawr-gura-x-calliope-mori
23	13	Crying for Rain	https://previews.dropbox.com/p/thumb/ACQl6okwvwuTzh_VfPgsmw3am3XtU1zBXtlsrcLs9wDfsbT-pWRm2-WUEvL-GLkpLWcvWIGVMlzgZhLW6QZfQVq5QMOUr4AOpy8Nm8dPQ67l2GDaP_6hbkK0LkfL_lWip_GHFPWlQ4znFPMaPOcah6Si7b2BBUVaoiNhYcCBk9LXWvYUB4MC_3bENTFtB59GdyHu8sQ6NaQ_M4bQFxumqWELYVR8RMuYcAYrbcyKSQFQfuLsknuDO8c6oSzoY9jPLPplI9EmQYJk7AHdY6e3GPpditjZTDT7c050Whg2lUrwGjk3gU5Prt3dNLRX22Cheo53vrIieo27g3_iLNjsUm4E/p.jpeg	9	https://soundcloud.com/laspo-video/crying-for-rain-minami-mv
25	15	Neo-Aspect	https://previews.dropbox.com/p/thumb/ACSiA4bQQzl-s6NgSpkRtEXUvDvkuWwMogohCi6ztVvF0X1GCpg4qK-xYsXKjOGComDpbXf5owMgPeu0YKGPW30mhkCHrv-pIj1nzhulovrLaKrX3IrAVcEHHhWgBeeo1Y-q1mm2YsnKNYdoHhS-Evb8vOzzD7o3n1tBK6GJETMBL0SvFIAmxbhu8T9c4oRIPLcPvTeKu5EE1b0o1HQtIPQrBLQTnwhDpH1m0QbfhrgwYxiIpBzQHjKvmkok_8VMVOI_qdP55aE1saQfwPYdvTIN09NIhgHXb8pnXk717xLwisqYsDmuJfZ7DRSDyx3H7Mgop3SFfg23cJWlBUJ5GezF/p.png	10	https://soundcloud.com/kbtsgrvmxsmi/neo-aspect
4	2	Track 2	https://previews.dropbox.com/p/thumb/ACRMDRrFxD5eYSUxFkdxREZIFhvVJXNfxL83O_pj-v0ti60BBdB82kDaNun308dg5xP9E-50cISMMYeGuohCuUBE80M8SHkgNApk-izA-r2dyRngbnBGC_t_9AZKDb-Ke_OJHTuzdsEU9xjDosox5qhT2xdrIy_dnBrtOj6BCQ2lTi2_jGCm_n6lzfIcUH3S3uGSWsHRTIAV-VLyQmgvzg_-H36WwD8iQH3JShO2W3SaZuqjh9kg8ic0bIRPIYohvfZPcWoAXLIwDRRwzaY8NPUF9C-aEiyotk3oT2PsfVoH9piGBJymcCIBBuWdhpkiwwFBVCyz-mtk4pqX53qRr9P_/p.jpeg	2	https://soundcloud.com/sam_relaxation/relaxing-music-for-sleep-relax-study-stress-relief-and-meditation-track2-new-album?in=sam_relaxation/sets/album-1-sleep-calm-relax
3	2	Track 1	https://previews.dropbox.com/p/thumb/ACQp3znA6cw3eoDet-IbYKdU0CpCzviIBGm3X5nrMEr2WkPXAztduyfcbuBhaDDchu6e_M7ZXCfPbtak8OW6rH4R2K57ePapIunBfy4uixgwnGEgRBVRFzEaey05QfiG95OJ37z-mDwVgSbiMyozfFVP1XRYKrYLJzNEpVVVsVDCtMiTWCLuU1sQEn0_kKd3upUf2Ptzmf9yu5zbdOyG0Bll6W16SSS-6AL9ENg296wBJyBZq-w3T7HLLgSwqK1z_ari2Z9uoWwBqWd01T0I-de3DEUyfiWls2S97J8lWXxYw1o6BUHbq383kmqxAHR4drGrjaDkRpMuzrThOuO_A4JP/p.jpeg	2	https://soundcloud.com/sam_relaxation/relaxing-music-for-sleep-relax-study-stress-relief-and-meditation-track1-new-album?in=sam_relaxation/sets/album-1-sleep-calm-relax
5	2	Track 3	https://previews.dropbox.com/p/thumb/ACS18iO0I5-rzbvz_6i-dc1QVhF3IwJCSTF8krMFydjf-HM2N4OkrhfvcVYf4I6HpIwHkH5SNebiObmhtz77HjbjtE1CDglfBhWMuQsClu77WRo0862XCXw-NlQ8ykD2xxNdaIBg9JF3ovniUQaP2GY8JLFuAbujcX4venFE9WVKBSjr7x24Hg-ShB2TYTXhxjgUoolUf8s7tZ2uBFyswPSoVbK8VE8F_iE221OR-D1mjNPTmx2rBAec87KaMOrxV8Vkug0KwV5ESnFD9k9AampeUiN_t0MjlzX8HUqZ5RMq0xUTEcdE-tF1GptTPXZW4sc3cImnbsYIWXde31ql1j2O/p.jpeg	2	https://soundcloud.com/sam_relaxation/relaxing-music-for-sleep-relax-study-stress-relief-and-meditation-track3-new-album?in=sam_relaxation/sets/album-1-sleep-calm-relax
7	2	Track 5	https://previews.dropbox.com/p/thumb/ACRHQ81M68XB04xfTzB53O5XeLUwi3FA3HNh1Dl5ZvwiKPEpMd4XGZCPHXBhNWr6knNx0Tb3P55FfzPIWHaSvrZXDmOe3ro0RQV6-SYXM7lYRF2aylE4c9cZ9gZJUt1hwcb9qTEVtCfjGEQ0Wony_kwmGXM5Stm39zVXvac81mrV7UyOKxN30bnxwAcZ_jC93NeWdrDnOURTbWL3b36EUCD3MyQ2gtk9uK8NCqctxmbWWV5ZElCiDVGklkzWZZ34BepNCdU50tHHWsLYkrBtmNc0RD7jeVOeOYf27rmkKkhqq5dBkPowtGO-X_4TqgXFlW9uM0nYyy12oHm2CtF6Mvl-/p.jpeg	2	https://soundcloud.com/sam_relaxation/relaxing-music-for-sleep-relax-study-stress-relief-and-meditation-track5-new-album?in=sam_relaxation/sets/album-1-sleep-calm-relax
14	5	Beyond the Sky	https://previews.dropbox.com/p/thumb/ACTUtDsFxREaqlXgBlyRp0R-Q0OOBtG6-MQKpGD2H3h37raafeDnoIeq5Q0FKs8l1S9tT4iIbqq2T7P8dWbqsTlzv3sA0wbw-EOYoBh-mYHKJAzcOnytWrbaNAU4n7moy5cnwBJ6ZB8vKpEbzsmyoy478OW-qdCfflLTIFkxCGXKXQVpTcuuwGguCIREna5JZDHN5LO3O5GUlpDHZg9BG84B-nmK4u--6hQGyq2bUmBoktGfpP2DzkhU92TrIWNkNyuYWLJEwBrL6O8sb6wsS5LchdbrfB0PhsPNvxKbHlqGmCAI_JjKaxuVIYZT0IxLH9RlmEnqYEwwUMyWqnXhCz2V/p.png	4	https://soundcloud.com/vgmplanet/beyond-the-sky-1?in=vgmplanet/sets/xenoblade-chronicles-ost
15	6	One Last You	https://previews.dropbox.com/p/thumb/ACSHpSsHlVP-qfvdOmKTYo-RN_gNdvkZlB1CUGJnJFbijxyqt2IGCDBYqDAq40xe3D7pbwrcdVSoR_6oItyn0U_cM3rKrM6wI34f9mRVB3v4v3OgF3dsHYOfUB6P53GtJq6iJ3wfgf-fzRskosWGKaC1EMvv5hAPotZbg7FB52O1lYUDdbbVSOUeiNkJpwgSR1GseFacVdMKQOmvhmqwUk3W3ozp-FZgeefDbt33qUTCNtJyYd-mbbj5uKIOOHRdqEsGjHIMDLxc8vuChtLJPPaaKOTXygg7d0YZ-iapdLsXYqOF1KGucZF-iA2EEJEmzXOkqfseEL9lzchiYIvE_DOK/p.jpeg	5	https://soundcloud.com/user-805519978/xenoblade-chronicles-2-ost-one-last-you?in=krarkci/sets/xenoblade-chronicles-2-ost
16	7	A Moment of Eternity	https://previews.dropbox.com/p/thumb/ACR2mbR5q50UCIOYW98vnjUAJMpnnH_R0jXYBiImk2gPiTl2dD2M3j6--ASCp4Q7dCcn9gW-3qijtH12Q7NRe3dCz9eUULb_4vAas8JfYnfDvZfp7BUJpTUy9V_AM74GLVTLpwC9vjMUXqZYueF7Mh6ZByKLd2ZVIYP_O-1Oi5osHmPgz8atAuT0CF338zgcpgy3oUoL-9RbhnTPnxvK5QhrD7rIb-p0zp0AA10_tdcyNA8910GaQ6wPZ5wh_U4DnEKqt5dUgXW-qO5XxuE5siqx93ZmxESRMZogsGd8Yo3YKhrG-uzGg94NrlU0Lovim5moPqvBnTtu-GdNEOsrCrDQ/p.jpeg	5	https://soundcloud.com/paper-goat/a-moment-of-eternity-xenoblade-chronicles-2-torna-the-golden-country-ed-1
18	8	Where We Belong	https://previews.dropbox.com/p/thumb/ACR7SZHil7588WgKvwiF0DmmUgAF4UXeTRli7snTZEzq0waiLRG0XMQO3Lb-CsLFp8OhYFeUMwcEttKG3ev466ciGuiO2G7FOIOBpOm7Hg-trfrClrw-xUGwHMyFwC6BtMyWX4kEVxA66u84gOiC_ZSWkORCh3FRSwJJNTPlpcS1morinSZ3zIGzTIuWLLdiaU4Cbmz2dcUK8hh4o0ntA9tYbM6fyB9FD6yCh462hNLD1oOHt9XbeAZOEkVtsfsjey_MCRgPRWbZq2O16LWnk-uS9CyEOngs-GnIQSvUgSqHbB6-EzUbBz4AaMZzH3gFMZM9xhz15aPMZXT7xAYA38cf/p.jpeg	6	https://soundcloud.com/user-675036643/xenoblade-chronicles-66644039?in=user-675036643/sets/xenoblade-chronicles-3
22	12	Roki	https://previews.dropbox.com/p/thumb/ACQstlwMIyhrQpSSQkTtZGeeHxsuY1P9IQZ4BSwCIvOTW_0lI8YI087MHEv4e-9uGJnWwwBoysntvYnxit_6PrcS2rGljoQOqHjKlH4U-L7wxASGzdY7hll7BVWdh1HYuK5NeXPJ0Ae2ibfMhFmCkigoRTLFCdyf9PHAzcxRagL2xd_KVcQReW1-s6i_CfuPt4fN7wWZHAl_-UCyvjR8WeK8IbuqzIcoSERwL4goSwvwy3EV5OSQ2_a2aso0yyL6IRM1jI7LAptjxxW7BEJox8Pa5_10SJBwwIGTr0qK8e1qhBVYQYEKVlu7NDnDko49y93z1O3jdptXnKTs_8ZQcrUz/p.jpeg	8	https://soundcloud.com/user-765456143-680869546/roki-calliope-mori
24	14	ETERNAL BLUE	https://previews.dropbox.com/p/thumb/ACQa1SMpobsUybSeLAl3-_UoRq0_UnHsn49lL5M-4mNoBAYEs_VojuafEponq9HtwkN8qk2OcL6Z4F_WVmIyPUZqSa20e-7CQZPYy8tmZhHEinNkV3jJ0lDZ7nlpEDuWh_VN0HNo-9kAUbnPopu1phNxnGPkEYqI1rdZ7vcIVSgLi-vpKm4MqCp7C9EUVUFoLg1FPuBovNwijqzX16k32fvA6FTM_lXISpGqkZ-2Nrxw_6grehjoL2wu-PuUDBvQhYKMcEAgjIDMXteSLofu9uRkkD2bSBufTAKLGuI_sKL7gz5o1hiqmWpMfKu5IYEyMGpTYWdyJOOzsIU7WYujBGtH/p.jpeg	9	https://soundcloud.com/ko-ba-ya-shi-211356364/eternal-blue-minami
\.


--
-- Data for Name: playlist_songs; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.playlist_songs (id, playlist_id, song_id) FROM stdin;
3	6	1
4	6	4
5	7	1
6	7	21
7	7	18
9	7	19
8	7	24
10	7	20
11	7	5
12	7	14
13	7	6
14	8	1
15	8	4
16	8	14
17	8	6
18	9	1
19	9	4
20	9	16
21	9	18
22	9	5
23	10	1
24	10	6
25	11	1
26	11	18
27	12	23
28	12	25
29	13	1
30	13	4
31	14	1
32	14	14
33	15	1
34	15	4
35	16	4
36	16	6
37	17	1
38	17	4
39	17	6
40	5	6
41	5	4
42	5	1
\.


--
-- Data for Name: playlists; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.playlists (id, name) FROM stdin;
6	New
7	safafsf
8	adfdf
9	sfesfewf
10	asdadads
11	asdasdas
12	Last
13	asfasfasf
14	sdfsf
15	sdfdsfds
16	Relax
17	
5	Relax
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.users (id, username, email, password, created_at) FROM stdin;
2	cjidscdceceng	apuewbfwef@gmail.com	$2b$10$Ve0i0ro8nIEPhI2r/w0xQeY.DlNNiEB6TKzPEVqGOCOtjLWxgD4bi	2024-06-02 14:09:44.584706
3	cjidscdceceng	apuewbfwef@gmail.com	$2b$10$52m9y669f6TKPPAaapZfo.2gl.Dcl0Mo90ajHo1PZKsWa2.i5o1tG	2024-06-04 17:55:59.724938
4	adhelia	aputrimaylani26@gmail.com	$2b$10$IMPkxmIKCwEIp/GExAF3feDn7bZi8i6MKMGauE1k9Ym8Cij6fDn6m	2024-06-08 06:23:07.135427
5	Adheliaa	whoinalaa11@gmail.com	$2b$10$nuSbp0aWchSeN0X8WhiQE.kyZyKZ6vyEE8eJkNitQC8vecxvbk7Di	2024-06-08 06:25:18.229046
\.


--
-- Name: albums_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.albums_id_seq', 1, false);


--
-- Name: artists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.artists_id_seq', 1, false);


--
-- Name: musics_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.musics_id_seq', 1, false);


--
-- Name: playlist_songs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.playlist_songs_id_seq', 42, true);


--
-- Name: playlists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.playlists_id_seq', 17, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: albums albums_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.albums
    ADD CONSTRAINT albums_pkey PRIMARY KEY (id);


--
-- Name: artists artists_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.artists
    ADD CONSTRAINT artists_pkey PRIMARY KEY (id);


--
-- Name: musics musics_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.musics
    ADD CONSTRAINT musics_pkey PRIMARY KEY (id);


--
-- Name: playlist_songs playlist_songs_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.playlist_songs
    ADD CONSTRAINT playlist_songs_pkey PRIMARY KEY (id);


--
-- Name: playlists playlists_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.playlists
    ADD CONSTRAINT playlists_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: albums albums_artist_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.albums
    ADD CONSTRAINT albums_artist_id_fkey FOREIGN KEY (artist_id) REFERENCES public.artists(id);


--
-- Name: musics musics_album_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.musics
    ADD CONSTRAINT musics_album_id_fkey FOREIGN KEY (album_id) REFERENCES public.albums(id);


--
-- Name: musics musics_artist_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.musics
    ADD CONSTRAINT musics_artist_id_fkey FOREIGN KEY (artist_id) REFERENCES public.artists(id);


--
-- Name: playlist_songs playlist_songs_playlist_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.playlist_songs
    ADD CONSTRAINT playlist_songs_playlist_id_fkey FOREIGN KEY (playlist_id) REFERENCES public.playlists(id);


--
-- Name: playlist_songs playlist_songs_song_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.playlist_songs
    ADD CONSTRAINT playlist_songs_song_id_fkey FOREIGN KEY (song_id) REFERENCES public.musics(id);


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO neon_superuser WITH GRANT OPTION;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON TABLES TO neon_superuser WITH GRANT OPTION;


--
-- PostgreSQL database dump complete
--

